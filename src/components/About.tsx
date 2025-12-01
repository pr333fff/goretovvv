"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Bot, 
  Workflow, 
  Zap,
  Server,
  Database,
  Sparkles,
  Link
} from "lucide-react";
import ProfileCard from "@/components/ProfileCard";

const skills = [
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "Telegram API", icon: Bot },
  { name: "OpenAI API", icon: Sparkles },
  { name: "API интеграции", icon: Link },
  { name: "PostgreSQL", icon: Database },
  { name: "Автоматизации", icon: Workflow },
];

// Оптимизированные варианты анимаций для GPU-ускорения
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }
};

export function About() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="text-center mb-12 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            О разработчике
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают меня?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            3+ года превращаю идеи в работающие решения для бизнеса
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Card */}
          <motion.div
            {...fadeInLeft}
            className="flex justify-center will-change-transform"
          >
            <ProfileCard
              name="GORETOV"
              title="Telegram Bot Developer"
              handle="goretov"
              status="Доступен для проектов"
              contactText="Связаться"
              avatarUrl="/avatar.jpg"
              iconUrl="/icons-pattern.svg"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(59, 130, 246, 0.35)"
              behindGlowSize="60%"
              onContactClick={handleContactClick}
              innerGradient="linear-gradient(145deg, rgba(59, 130, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)"
            />
          </motion.div>

          {/* Description and skills */}
          <motion.div
            {...fadeInRight}
            className="space-y-6 will-change-transform"
          >
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">50+ проектов</strong> для бизнесов от кофеен до онлайн-школ. 
                Каждый бот — это не просто код, а <strong>инструмент роста</strong> вашего дела.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "⚡", title: "Быстрый старт", desc: "MVP за 3-5 дней" },
                  { icon: "🛡️", title: "Гарантия", desc: "30 дней поддержки" },
                  { icon: "🔧", title: "Под ключ", desc: "От идеи до запуска" },
                  { icon: "📈", title: "Результат", desc: "Измеримые метрики" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <span className="text-2xl mb-1 block">{item.icon}</span>
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Стек технологий
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1.5 text-sm gap-1.5 cursor-default hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
