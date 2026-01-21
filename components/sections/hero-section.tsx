"use client";

import { Github, Linkedin, Mail, MapPin, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfilePhoto } from "@/components/common/profile-photo";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/constants/contact";

export function HeroSection() {
  return (
    <section className="min-h-[70vh] lg:min-h-0 flex flex-col justify-center py-12 lg:py-0">
      <div className="space-y-8">
        <ProfilePhoto />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass opacity-0 animate-fade-in hover:border-primary/50 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Disponível para novas oportunidades
          </span>
        </div>

        <div className="space-y-4 opacity-0 animate-fade-in stagger-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-foreground block">Rafael</span>
            <span className="gradient-text block bg-clip-text">Carvalho</span>
          </h1>
          <div className="flex items-center gap-3 pt-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground">
              Back-end Developer
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md opacity-0 animate-fade-in stagger-2">
          Construo sistemas escaláveis e de alta performance. Especializado em
          microsserviços, cloud e arquiteturas robustas.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground opacity-0 animate-fade-in stagger-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Brasil</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>Ingles Fluente C1</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-in stagger-4">
          <Button asChild className="group">
            <Link href={`mailto:${EMAIL}`}>
              <Mail className="w-4 h-4 mr-2" />
              Entre em contato
            </Link>
          </Button>
          <Button variant="outline" asChild className="group bg-transparent">
            <Link href="#" target="_blank">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Curriculo
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 opacity-0 animate-fade-in stagger-5 pt-2">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            className="group relative p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
