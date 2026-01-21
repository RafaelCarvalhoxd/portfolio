"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/section-header";
import { contactLinks, EMAIL } from "@/constants/contact";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <SectionHeader title="Contato" />

      <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-primary/20">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Vamos conversar?
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                Estou aberto a novas oportunidades
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base">
            Se você está procurando um desenvolvedor back-end para seu time ou projeto,
            ou simplesmente quer trocar uma ideia sobre tecnologia, ficarei feliz em
            conversar. Respondo em até 24 horas.
          </p>

          <Button
            asChild
            size="lg"
            className="group/btn shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
          >
            <Link href={`mailto:${EMAIL}`}>
              <Mail className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              Enviar mensagem
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 relative z-10" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
