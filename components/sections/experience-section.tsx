"use client";

import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { experiences } from "@/constants/experiences";
import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative pl-8">
      <div
        className={`absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
          experience.current
            ? "bg-primary border-primary"
            : "bg-background border-muted-foreground group-hover:border-primary"
        }`}
      >
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
        )}
      </div>

      <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/20 text-xs font-medium text-muted-foreground group-hover:border-primary/40 group-hover:bg-secondary transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {experience.period}
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>

          <div className="flex items-start gap-3 mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {experience.title}
              </h3>
              <p className="text-sm text-muted-foreground">{experience.company}</p>
            </div>
          </div>

          {experience.previousRole && (
            <p className="text-xs text-muted-foreground mb-3 pl-11">
              Anteriormente: {experience.previousRole}
            </p>
          )}

          {experience.achievements && (
            <div className="mb-6 space-y-2.5">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed group/item"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="group-hover/item:text-foreground transition-colors duration-300">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          )}

          {experience.description && !experience.achievements && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {experience.description}
            </p>
          )}

          <div className="pt-4 border-t border-border/50">
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Stack Técnica
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 cursor-default hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-20">
      <SectionHeader title="Experiencia" />

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
