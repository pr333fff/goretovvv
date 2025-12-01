"use client";

import { Bot, Zap } from "lucide-react";
import PillNav from "@/components/ui/PillNav";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const Logo = () => (
    <div className="relative">
      <Bot className="w-full h-full" />
      <Zap className="w-3 h-3 absolute -right-0.5 -top-0.5 text-accent animate-pulse" />
    </div>
  );

  return (
    <PillNav
      logo={<Logo />}
      logoAlt="GORETOV"
      items={navItems}
      baseColor="rgba(30, 41, 59, 0.95)"
      pillColor="#3B82F6"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#ffffff"
      ease="power3.easeOut"
      initialLoadAnimation={true}
    />
  );
}
