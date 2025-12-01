# GORETOV Portfolio - Copilot Instructions

## Описание проекта
Одностраничный сайт-портфолио для фрилансера, специализирующегося на Telegram-ботах и автоматизациях.

## Технологический стек
- Next.js 16+ с App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion для анимаций
- Lucide React для иконок (НЕ использовать emoji)
- shadcn/ui компоненты

## Правила разработки

### Стилизация
- Использовать CSS переменные из `globals.css`
- Mobile-first подход
- Кастомные цвета: `primary` (#3B82F6), `accent` (#06B6D4), `highlight` (#FACC15)

### Компоненты
- Все интерактивные компоненты должны быть `"use client"`
- Использовать Framer Motion для анимаций появления
- Иконки только из `lucide-react`

### Структура
- Компоненты в `/src/components/`
- Данные в `/src/data/`
- UI компоненты shadcn в `/src/components/ui/`

## Команды
- `npm run dev` - запуск dev-сервера
- `npm run build` - сборка проекта
- `npm run lint` - проверка кода
