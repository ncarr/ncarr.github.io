import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function newestFirst(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (left, right) =>
      right.data.pubDate.getTime() - left.data.pubDate.getTime(),
  );
}

export function projectsNewestFirst(posts: BlogPost[]): BlogPost[] {
  const projectDate = (post: BlogPost) =>
    post.data.endDate ?? post.data.startDate ?? post.data.pubDate;

  return [...posts].sort(
    (left, right) =>
      projectDate(right).getTime() - projectDate(left).getTime(),
  );
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function projectDateRange(post: BlogPost): string | undefined {
  const { startDate, endDate } = post.data;
  if (!startDate) return undefined;
  return `${formatDate(startDate)} – ${endDate ? formatDate(endDate) : "Present"}`;
}

export function postUrl(post: BlogPost): string {
  return `/blog/${post.id}/`;
}
