import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z
    .object({
      title: z.string(),
      pubDate: z.coerce.date(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      cardImage: image().optional(),
      cardImageAlt: z.string().optional(),
      blogHighlight: z.boolean().default(false),
      projectHighlight: z.boolean().default(false),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
    })
    .superRefine((post, context) => {
      if (post.projectHighlight && !post.tags.includes("project")) {
        context.addIssue({
          code: "custom",
          message: "A project highlight must include the project tag.",
          path: ["tags"],
        });
      }

      if (
        post.startDate &&
        post.endDate &&
        post.endDate.getTime() < post.startDate.getTime()
      ) {
        context.addIssue({
          code: "custom",
          message: "endDate must be on or after startDate.",
          path: ["endDate"],
        });
      }
    }),
});

const experience = defineCollection({
  loader: file("./src/content/experience.yml"),
  schema: z
    .object({
      organization: z.string(),
      role: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      highlights: z.array(z.string()).default([]),
    })
    .superRefine((role, context) => {
      if (
        role.endDate &&
        role.endDate.getTime() < role.startDate.getTime()
      ) {
        context.addIssue({
          code: "custom",
          message: "endDate must be on or after startDate.",
          path: ["endDate"],
        });
      }
    }),
});

export const collections = { blog, experience };
