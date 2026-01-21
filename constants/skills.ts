import { Code2, Server, Database, Layers, Radio, Activity, Cpu, Cloud, GitBranch, Container } from "lucide-react";
import { SkillCategory, TechStack } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens",
    icon: Code2,
    skills: [
      { name: "Golang" },
      { name: "Node.js" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    title: "Arquitetura",
    icon: Layers,
    skills: [
      { name: "Clean Architecture" },
      { name: "DDD" },
      { name: "Hexagonal" },
    ],
  },
  {
    title: "Comunicacao",
    icon: Radio,
    skills: [
      { name: "gRPC" },
      { name: "REST APIs" },
      { name: "WebSocket" },
      { name: "RabbitMQ" },
    ],
  },
  {
    title: "Observabilidade",
    icon: Activity,
    skills: [
      { name: "Prometheus" },
      { name: "Grafana" },
    ],
  },
];

export const techStack: TechStack[] = [
  { name: "Go", icon: Cpu },
  { name: "Node.js", icon: Server },
  { name: "Docker", icon: Container },
  { name: "Git", icon: GitBranch },
];
