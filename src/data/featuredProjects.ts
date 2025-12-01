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
    previewImage: "/screenshots/mocup1.jpeg",
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
    id: "invest-ai-bot",
    title: "InvestAI",
    description: "AI-аналитик для инвесторов с интеграцией MOEX, анализом новостей и прогнозированием цен",
    fullDescription: "Инвестиционный Telegram-бот с искусственным интеллектом для профессиональных инвесторов. Интеграция с Московской биржей (MOEX) для получения рыночных данных в реальном времени. Подключено 10+ источников финансовых новостей и множество API для сбора информации. Используется ChatGPT-5 для глубокого анализа всех данных. Бот с высокой точностью прогнозирует движение цен акций, анализирует исторические данные и заранее предупреждает о необходимости ребалансировки портфеля. Уникальная функция — распознавание скриншотов брокерских счетов и автоматическое определение позиций по фото. Административная панель для мониторинга работы сервисов. Монетизация через Robokassa.",
    features: [
      "Интеграция с MOEX API",
      "10+ источников новостей",
      "ChatGPT-5 для анализа",
      "Прогнозирование цен акций",
      "Распознавание скриншотов счетов",
      "Оповещения о ребалансировке",
      "Админ-панель мониторинга",
      "Оплата через Robokassa",
    ],
    previewImage: "/screenshots/mocup2.jpeg",
    screenshots: [
      "/screenshots/proj5.jpeg",
      "/screenshots/proj6.jpeg",
      "/screenshots/proj7.jpeg",
    ],
    stats: {
      users: "1K+",
      messages: "50K+",
      rating: "4.9",
    },
    gradient: "from-emerald-600, to-cyan-400",
    icon: Zap,
    telegramUrl: "https://t.me/invest_ai_bot",
    demoAvailable: true,
  },
];
