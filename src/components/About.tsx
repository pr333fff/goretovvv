"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Bot, 
  Workflow, 
  Zap,
  Server,
  Database
} from "lucide-react";
import ProfileCard from "@/components/ProfileCard";

const skills = [
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "Telegram API", icon: Bot },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разработчик с опытом создания Telegram-решений для бизнеса
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
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={false}
              onContactClick={handleContactClick}
              innerGradient="linear-gradient(145deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)"
            />
          </motion.div>

          {/* Description and skills */}
          <motion.div
            {...fadeInRight}
            className="space-y-6 will-change-transform"
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
