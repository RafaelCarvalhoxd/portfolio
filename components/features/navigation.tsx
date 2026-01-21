"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/constants/navigation";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block mt-12">
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          const Icon = item.icon;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                <span className="text-sm font-medium">{item.label}</span>
                <span
                  className={`ml-auto h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-6 bg-primary"
                      : "w-0 group-hover:w-3 bg-muted-foreground"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNavigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <ul className="flex items-center gap-2 p-2 rounded-2xl glass shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          const Icon = item.icon;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
