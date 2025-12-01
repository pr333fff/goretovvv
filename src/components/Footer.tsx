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
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Готовы автоматизировать бизнес?
              </h3>
              <p className="text-background/70">
                Первая консультация бесплатно. Ответ — за 15 минут.
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Link href="#contact">
                Обсудить проект
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/LOGO.png"
                alt="GORETOV Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">GORETOV</span>
            </Link>
            <p className="text-background/70 text-sm max-w-xs">
              Разработка Telegram-ботов, mini-apps и автоматизаций для бизнеса
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              {footerLinks.social.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-background/10 hover:bg-primary text-background hover:text-primary-foreground transition-colors"
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
            <p className="text-background/60 text-sm flex items-center gap-1">
              Сделано с <Heart className="w-4 h-4 text-destructive inline" /> в России
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
