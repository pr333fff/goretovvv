"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface PastWork {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

// Данные о прошлых работах - замените на реальные
const pastWorks: PastWork[] = [
  {
    id: "work1",
    title: "Бот для доставки",
    description: "Заказ еды через Telegram",
    image: "/works/work1.jpeg",
    category: "E-commerce"
  },
  {
    id: "work2",
    title: "CRM-бот",
    description: "Управление клиентами",
    image: "/works/work2.jpeg",
    category: "Бизнес"
  },
  {
    id: "work3",
    title: "Бот записи",
    description: "Онлайн-запись на услуги",
    image: "/works/work3.jpeg",
    category: "Услуги"
  },
  {
    id: "work4",
    title: "Магазин в боте",
    description: "Каталог товаров",
    image: "/works/work4.jpeg",
    category: "E-commerce"
  },
  {
    id: "work5",
    title: "Чат-бот поддержки",
    description: "Автоответы 24/7",
    image: "/works/work5.jpeg",
    category: "Поддержка"
  },
  {
    id: "work6",
    title: "Бот рассылок",
    description: "Массовые уведомления",
    image: "/works/work6.jpeg",
    category: "Маркетинг"
  },
  {
    id: "work7",
    title: "Автоворонка",
    description: "Автоматизация продаж",
    image: "/works/work7.jpeg",
    category: "Продажи"
  },
];

// Дублируем массив для бесконечной прокрутки
const duplicatedWorks = [...pastWorks, ...pastWorks];

export function PastWorks() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTouching, setIsTouching] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Touch handlers
  const handleTouchStart = () => {
    setIsTouching(true);
    setShowSwipeHint(false); // Скрываем подсказку после первого касания
  };

  const handleTouchEnd = () => {
    // Задержка перед возобновлением анимации
    setTimeout(() => setIsTouching(false), 2000);
  };

  // Скрываем подсказку через 5 секунд
  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative my-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-4 border border-emerald-500/20 backdrop-blur-sm">
          <Briefcase className="w-4 h-4" />
          Выполненные заказы
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Работы для <span className="text-primary">клиентов</span>
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Реальные проекты, которые уже приносят результат
        </p>
      </motion.div>

      {/* Auto-scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden"
      >
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Swipe hint for mobile */}
        {showSwipeHint && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span>Свайпайте</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
          </motion.div>
        )}

        {/* Infinite carousel - touch to pause, auto-scroll always */}
        <div 
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className={`flex animate-carousel ${isTouching ? '[animation-play-state:paused]' : ''} hover:[animation-play-state:paused]`}>
            {duplicatedWorks.map((work, index) => (
            <div
              key={`${work.id}-${index}`}
              className="flex-shrink-0 px-2 group"
            >
              <div className="relative w-[160px] md:w-[180px] aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                {/* Image */}
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Info on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-primary/90 text-white rounded-full mb-2">
                    {work.category}
                  </span>
                  <h4 className="font-semibold text-white text-sm mb-1">{work.title}</h4>
                  <p className="text-white/70 text-xs">{work.description}</p>
                </div>
                
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-medium bg-black/50 backdrop-blur-sm text-white rounded-full group-hover:opacity-0 transition-opacity duration-300">
                  {work.category}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </motion.div>

      {/* Stats line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center items-center gap-6 mt-10 text-center"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">30+</span>
          <span className="text-sm text-muted-foreground">выполненных проектов</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">3 года</span>
          <span className="text-sm text-muted-foreground">опыта</span>
        </div>
      </motion.div>
    </div>
  );
}
