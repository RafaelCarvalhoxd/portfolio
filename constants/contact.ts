import { Mail, Github, Linkedin } from "lucide-react";
import { ContactLink } from "@/types";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "devrafaelcarvalho14@gmail.com",
    href: "mailto:devrafaelcarvalho14@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/RafaelCarvalhoxd",
    href: "https://github.com/RafaelCarvalhoxd",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rafaelcarvalho4",
    href: "https://www.linkedin.com/in/rafaelcarvalho4/",
    icon: Linkedin,
  },
];

export const EMAIL = "devrafaelcarvalho14@gmail.com" as const;
export const GITHUB_URL = "https://github.com/RafaelCarvalhoxd" as const;
export const LINKEDIN_URL = "https://www.linkedin.com/in/rafaelcarvalho4/" as const;
