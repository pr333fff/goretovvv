import { Bot, Zap, Sparkles } from "lucide-react";
import { FeaturedProjectData } from "@/components/FeaturedProject";

export const featuredProjects: FeaturedProjectData[] = [
  {
    id: "astro-tarot-bot",
    title: "Астро Таро Бот",
    description: "AI-астролог с раскладами Таро, гороскопами и красивым Mini App интерфейсом",
    fullDescription: "Астрологический Telegram-бот нового поколения с интеграцией ChatGPT-4 для глубокой трактовки раскладов Таро. Бот умеет делать различные расклады на картах Таро с AI-интерпретацией. Разработано стильное Mini App с интуитивным интерфейсом для подробных раскладов и ежедневных гороскопов. Монетизация через Robokassa — подписки и разовые покупки. Админ-панель для отслеживания метрик: пользователи, платежи, популярные расклады.",
    features: [
      "Расклады Таро с AI-трактовкой",
      "Интеграция ChatGPT-4 API",
      "Mini App с красивым UI",
      "Ежедневные гороскопы",
      "Оплата через Robokassa",
      "Админ-панель с метриками",
    ],
    screenshots: [
      "/screenshots/proj1.jpeg",
      "/screenshots/proj2.jpeg",
      "/screenshots/proj3.jpeg",
      "/screenshots/proj4.jpeg",
    ],
    stats: {
      users: "2K+",
      messages: "100K+",
      rating: "4.9",
    },
    gradient: "from-violet-600, to-purple-400",
    icon: Sparkles,
    telegramUrl: "https://t.me/astro_tarot_bot",
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
