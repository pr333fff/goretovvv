export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  videoUrl?: string;
  telegramUrl?: string;
  category: "bot" | "miniapp" | "automation";
}

export const projects: Project[] = [
  {
    id: "coffee-bot",
    title: "Бот для кофейни",
    description: "Telegram-бот для приёма заказов кофе с выбором напитков, добавок и адреса доставки. Интеграция с CRM и уведомлениями для персонала.",
    features: ["Онлайн-заказы", "Интеграция с CRM", "Push-уведомления"],
    image: "/projects/coffee-bot.jpg",
    telegramUrl: "https://t.me/coffee_demo_bot",
    category: "bot",
  },
  {
    id: "booking-bot",
    title: "Бот записи на услуги",
    description: "Система онлайн-записи для салонов красоты, барбершопов и клиник. Автоматические напоминания и синхронизация с Google Calendar.",
    features: ["Календарь записей", "Напоминания", "Google Calendar"],
    image: "/projects/booking-bot.jpg",
    telegramUrl: "https://t.me/booking_demo_bot",
    category: "bot",
  },
  {
    id: "quiz-miniapp",
    title: "Quiz Mini App",
    description: "Интерактивный квиз для сбора лидов и прогрева аудитории. Гибкая настройка вопросов, результатов и интеграция с CRM.",
    features: ["Mini App", "Сбор лидов", "Аналитика"],
    image: "/projects/quiz-app.jpg",
    telegramUrl: "https://t.me/quiz_demo_bot",
    category: "miniapp",
  },
  {
    id: "shop-bot",
    title: "Интернет-магазин в Telegram",
    description: "Полноценный каталог товаров с корзиной, оформлением заказа и интеграцией платёжных систем. Админ-панель для управления.",
    features: ["Каталог товаров", "Корзина", "Оплата онлайн"],
    image: "/projects/shop-bot.jpg",
    telegramUrl: "https://t.me/shop_demo_bot",
    category: "bot",
  },
  {
    id: "crm-automation",
    title: "Автоматизация CRM",
    description: "Связка Telegram с Bitrix24, AmoCRM или HubSpot. Автоматическое создание сделок, задач и уведомлений для менеджеров.",
    features: ["Bitrix24", "AmoCRM", "Webhooks"],
    image: "/projects/crm-automation.jpg",
    category: "automation",
  },
  {
    id: "support-bot",
    title: "Бот техподдержки",
    description: "Умный бот для обработки обращений клиентов с тикет-системой, автоответами по FAQ и эскалацией сложных вопросов операторам.",
    features: ["Тикет-система", "Auto FAQ", "Операторы"],
    image: "/projects/support-bot.jpg",
    telegramUrl: "https://t.me/support_demo_bot",
    category: "bot",
  },
];

export const categories = [
  { id: "all", label: "Все решения" },
  { id: "bot", label: "Telegram-боты" },
  { id: "miniapp", label: "Mini Apps" },
  { id: "automation", label: "Автоматизации" },
] as const;
