"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Github, 
  Mail, 
  Code2, 
  Bot, 
  Workflow, 
  Zap,
  Server,
  Database
} from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "Telegram API", icon: Bot },
  { name: "PostgreSQL", icon: Database },
  { name: "Автоматизации", icon: Workflow },
];

const socialLinks = [
  { href: "https://t.me/goretov", icon: Send, label: "Telegram" },
  { href: "https://github.com/goretov", icon: Github, label: "GitHub" },
  { href: "mailto:hello@goretov.dev", icon: Mail, label: "Email" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разработчик с опытом создания Telegram-решений для бизнеса
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Avatar and social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20">
              <AvatarImage src="/avatar.jpg" alt="GORETOV" />
              <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                G
              </AvatarFallback>
            </Avatar>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">GORETOV</h3>
              <p className="text-muted-foreground mb-4">
                Telegram Bot Developer & Automation Specialist
              </p>
              
              {/* Social links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Description and skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Привет! Я занимаюсь разработкой Telegram-ботов, mini-apps и автоматизаций 
                для бизнеса уже более <strong>3 лет</strong>. За это время реализовал 
                <strong> 50+ проектов</strong> для клиентов из разных сфер: от небольших 
                кофеен до крупных онлайн-школ.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Моя цель — создавать решения, которые экономят время владельцев бизнеса 
                и увеличивают их прибыль. Каждый проект — это индивидуальный подход и 
                внимание к деталям.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Технологии и навыки
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, icon: Icon }) => (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm gap-1.5"
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
