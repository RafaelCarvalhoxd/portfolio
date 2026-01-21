"use client";

import { SectionHeader } from "@/components/common/section-header";
import { highlights } from "@/constants/about";

export function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="space-y-8">
        <SectionHeader title="Sobre mim" />

        <div className="grid grid-cols-2 gap-3 mb-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Iniciei minha trajetória no desenvolvimento de software em{" "}
            <span className="text-foreground font-medium">2023</span>, focando na
            criação de aplicações back-end robustas, com ênfase em{" "}
            <span className="text-foreground font-medium">boas práticas</span>,
            performance e escalabilidade.
          </p>
          <p>
            Atualmente, especializo-me em{" "}
            <span className="text-primary font-medium">arquitetura de microsserviços</span>,
            integrações complexas entre sistemas e{" "}
            <span className="text-primary font-medium">infraestrutura em nuvem</span>,
            sempre entregando soluções seguras e alinhadas às necessidades do negócio.
          </p>
          <p>
            Formado em{" "}
            <span className="text-foreground font-medium">
              Ciência da Computação
            </span>{" "}
            pela Universidade Jorge Amado (2025), com certificação de inglês fluente
            C1 pela Fisk.
          </p>
        </div>
      </div>
    </section>
  );
}
