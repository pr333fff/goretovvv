import { Bot, Zap } from "lucide-react";
import { FeaturedProjectData } from "@/components/FeaturedProject";

export const featuredProjects: FeaturedProjectData[] = [
  {
    id: "bot-1",
    title: "Бот #1",
    description: "Опишите вашего первого бота: что он делает, какую проблему решает.",
    fullDescription: "Подробное описание первого бота. Здесь можно рассказать о всех возможностях, технологиях и преимуществах использования. Добавьте информацию о том, как бот помогает пользователям решать их задачи.",
    features: [
      "Функция 1",
      "Функция 2",
      "Функция 3",
      "Функция 4",
    ],
    screenshots: [
      // Добавьте скриншоты сюда: "/screenshots/bot1-1.png", "/screenshots/bot1-2.png"
    ],
    stats: {
      users: "1K+",
      messages: "50K+",
      rating: "4.9",
    },
    gradient: "from-blue-500, to-cyan-400",
    icon: Bot,
    telegramUrl: "https://t.me/your_bot_1",
    demoAvailable: true,
  },
  {
    id: "bot-2",
    title: "Бот #2",
    description: "Опишите вашего второго бота: что он делает, какую проблему решает.",
    fullDescription: "Подробное описание второго бота. Здесь можно рассказать о всех возможностях, технологиях и преимуществах использования. Добавьте информацию о том, как бот помогает пользователям решать их задачи.",
    features: [
      "Функция 1",
      "Функция 2",
      "Функция 3",
      "Функция 4",
    ],
    screenshots: [
      // Добавьте скриншоты сюда: "/screenshots/bot2-1.png", "/screenshots/bot2-2.png"
    ],
    stats: {
      users: "500+",
      messages: "20K+",
      rating: "4.8",
    },
    gradient: "from-purple-500, to-pink-400",
    icon: Zap,
    telegramUrl: "https://t.me/your_bot_2",
    demoAvailable: true,
  },
];
