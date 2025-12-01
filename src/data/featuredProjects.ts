import { Bot, Zap, Users, MessageSquare, Star, TrendingUp } from "lucide-react";
import { FeaturedProjectData } from "@/components/FeaturedProject";

export const featuredProjects: FeaturedProjectData[] = [
  {
    id: "bot-1",
    title: "Бот #1",
    description: "Опишите вашего первого бота: что он делает, какую проблему решает, и почему он полезен пользователям.",
    features: [
      "Функция 1",
      "Функция 2",
      "Функция 3",
    ],
    stats: {
      users: "1K+",
      messages: "50K+",
      rating: "4.9",
    },
    gradient: "from-blue-500 to-cyan-400",
    icon: Bot,
    telegramUrl: "https://t.me/your_bot_1",
    demoAvailable: true,
  },
  {
    id: "bot-2",
    title: "Бот #2",
    description: "Опишите вашего второго бота: что он делает, какую проблему решает, и почему он полезен пользователям.",
    features: [
      "Функция 1",
      "Функция 2",
      "Функция 3",
    ],
    stats: {
      users: "500+",
      messages: "20K+",
      rating: "4.8",
    },
    gradient: "from-purple-500 to-pink-400",
    icon: Zap,
    telegramUrl: "https://t.me/your_bot_2",
    demoAvailable: true,
  },
];
