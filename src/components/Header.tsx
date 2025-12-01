"use client";

import Image from "next/image";
import PillNav from "@/components/ui/PillNav";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const Logo = () => (
    <Image
      src="/LOGO.png"
      alt="GORETOV Logo"
      width={40}
      height={40}
      className="rounded-xl"
    />
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
