import { User, Briefcase, Code2, Send } from "lucide-react";
import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#about", icon: User },
  { label: "Experiencia", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contato", href: "#contact", icon: Send },
];
