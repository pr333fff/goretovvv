"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Github, Mail, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  navigation: [
    { href: "#about", label: "Обо мне" },
    { href: "#projects", label: "Решения" },
    { href: "#contact", label: "Контакты" },
  ],
  social: [
    { href: "https://t.me/goretov", icon: Send, label: "Telegram" },
    { href: "https://github.com/goretov", icon: Github, label: "GitHub" },
    { href: "mailto:hello@goretov.dev", icon: Mail, label: "Email" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* CTA Banner */}
      <div className="relative border-b border-background/10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-3 gradient-text">
                Готовы автоматизировать бизнес?
              </h3>
              <p className="text-background/70 text-lg">
                Первая консультация бесплатно. Ответ — за 15 минут.
              </p>
            </div>
            <Button asChild size="lg" className="btn-gradient text-white font-semibold px-8 py-6 text-lg rounded-xl">
              <Link href="#contact">
                Обсудить проект
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/LOGO.png"
                alt="GORETOV Logo"
                width={80}
                height={80}
                className="rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-bold text-3xl">GORETOV</span>
            </Link>
            <p className="text-background/70 text-base max-w-xs leading-relaxed">
              Разработка Telegram-ботов, mini-apps и автоматизаций для бизнеса
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Навигация</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background hover:translate-x-1 transition-all duration-300 text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Социальные сети</h4>
            <div className="flex gap-4">
              {footerLinks.social.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent text-background transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} GORETOV. Все права защищены.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-2">
              Сделано с <Heart className="w-4 h-4 text-red-500 animate-pulse inline" /> в России
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
