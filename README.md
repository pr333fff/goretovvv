# GORETOV Portfolio

Одностраничный адаптивный сайт-витрина для фрилансера-разработчика, специализирующегося на Telegram-ботах, mini-apps и автоматизациях.

## Технологии

- **Next.js 16** с App Router и TypeScript
- **Tailwind CSS** для стилизации
- **Framer Motion** для анимаций
- **Lucide React** для иконок
- **shadcn/ui** для UI компонентов

## Начало работы

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
/src
  /app
    layout.tsx      # Основной layout с мета-тегами и шрифтами
    page.tsx        # Главная страница
    globals.css     # Глобальные стили и CSS переменные
  /components
    Header.tsx      # Навигация с мобильным меню
    Hero.tsx        # Главный экран с CTA
    About.tsx       # Секция "Обо мне"
    Projects.tsx    # Портфолио проектов
    ProjectCard.tsx # Карточка проекта
    ProjectModal.tsx# Модальное окно с деталями
    Contact.tsx     # Форма связи
    Footer.tsx      # Футер
  /data
    projects.ts     # Данные о проектах
```

## Цветовая схема

- `--primary`: #3B82F6 (синий)
- `--accent`: #06B6D4 (бирюзовый)
- `--background`: #F9FAFB (светлый фон)
- `--foreground`: #111827 (тёмный текст)
- `--highlight`: #FACC15 (акцент)

## Деплой

Рекомендуется деплой на [Vercel](https://vercel.com):

```bash
npm run build
```

## Кастомизация

- Замените данные в `/src/data/projects.ts` на свои проекты
- Обновите контактные ссылки в компонентах
- Добавьте изображения проектов в `/public/projects/`
- Добавьте свой аватар как `/public/avatar.jpg`
