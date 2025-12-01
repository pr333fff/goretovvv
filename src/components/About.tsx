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
  Link,
  Rocket,
  Shield,
  Wrench,
  TrendingUp,
  Clock,
  HeadphonesIcon,
  Target,
  Cpu,
  type LucideIcon
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

const advantages = [
  { 
    Icon: Rocket, 
    title: "Быстрый старт", 
    value: "3-5",
    unit: "дней",
    desc: "MVP готов к запуску",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  { 
    Icon: Shield, 
    title: "Гарантия", 
    value: "30",
    unit: "дней",
    desc: "Бесплатная поддержка",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  { 
    Icon: HeadphonesIcon, 
    title: "Связь", 
    value: "24/7",
    unit: "",
    desc: "На связи в Telegram",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  { 
    Icon: Target, 
    title: "Точность", 
    value: "100",
    unit: "%",
    desc: "Довольных клиентов",
    color: "text-violet-500",
    bg: "bg-violet-500/10"
  },
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
    <section id="about" className="py-24 md:py-40 bg-muted/30 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            О разработчике
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают <span className="text-primary">меня?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            3+ года превращаю идеи в работающие решения для бизнеса
          </p>
        </motion.div>

        {/* Advantages Grid - NEW DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-5xl mx-auto"
        >
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <item.Icon className={`w-6 h-6 md:w-7 md:h-7 ${item.color}`} />
              </div>
              
              {/* Value */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-3xl md:text-4xl font-bold ${item.color}`}>
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-lg md:text-xl font-semibold text-muted-foreground">
                    {item.unit}
                  </span>
                )}
              </div>
              
              {/* Title & Description */}
              <div className="font-semibold text-foreground mb-1">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </motion.div>
          ))}
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
            className="space-y-8 will-change-transform"
          >
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                <span className="text-primary font-semibold">50+ проектов</span> для бизнесов от кофеен до онлайн-школ. 
                Каждый бот — это не просто код, а <strong className="text-foreground">инструмент роста</strong> вашего дела.
              </p>
              
              {/* Process steps */}
              <div className="space-y-3">
                {[
                  { num: "01", text: "Обсуждаем задачу и составляем ТЗ" },
                  { num: "02", text: "Разрабатываю MVP за 3-5 дней" },
                  { num: "03", text: "Тестируем, дорабатываем, запускаем" },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-card/50 transition-colors"
                  >
                    <span className="text-2xl font-bold text-primary">{step.num}</span>
                    <span className="text-muted-foreground">{step.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                <Cpu className="w-5 h-5 text-primary" />
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
                      className="px-3 py-2 text-sm gap-2 cursor-default hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm border-border/60 hover:shadow-lg hover:shadow-primary/10"
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
