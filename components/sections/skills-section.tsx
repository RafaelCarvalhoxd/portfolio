"use client";

import { SectionHeader } from "@/components/common/section-header";
import { skillCategories } from "@/constants/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <SectionHeader title="Skills & Tecnologias" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-primary/20">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
