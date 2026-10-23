import avatar from "../assets/avatar.jpg";

export interface SocialLink {
  label: string;
  href: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  startDate?: string;
  endDate?: string;
  highlights: string[];
}

export const site = {
  name: "Nicholas Carr",
  tagline: "Hardware background with software experience",
  avatar,
  summary: [
    "I have been tinkering with technology for over 10 years. In that time, I have had broad exposure to many different technologies. From my work experience, attending dozens of hackathons, completing an undergrad in engineering physics, and building personal projects, I have had the opportunity to work with ESP32 microcontrollers, software-defined radio, 3D printers, React.js, and more.",
  ] as string[],
  resumeUrl: "/resume.pdf",
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/in/nicholas-carr" },
    { label: "GitHub", href: "https://github.com/ncarr" },
    { label: "Devpost", href: "https://devpost.com/ncarr" },
  ] satisfies SocialLink[],
  education: [
    {
      institution: "UBC",
      degree: "Engineering Physics — Bachelor of Applied Science",
      startDate: "2019-09-01",
      endDate: "2024-05-01",
      highlights: [
        "Course selection included numerical methods, automatic control, signals and systems, software construction, machine design, quantum mechanics, and differential equations",
      ],
    },
  ] as EducationEntry[],
};
