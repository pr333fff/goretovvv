"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

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

export function PastWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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

      {/* Scrollable gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scroll hint */}
        <div className="absolute -top-2 right-4 text-xs text-muted-foreground flex items-center gap-1 z-20">
          <span>Листайте</span>
          <ExternalLink className="w-3 h-3 rotate-90" />
        </div>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {pastWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 group"
            >
              <div className="relative w-[180px] md:w-[200px] aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
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
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-primary/90 text-white rounded-full mb-2">
                    {work.category}
                  </span>
                  <h4 className="font-semibold text-white text-sm mb-1">{work.title}</h4>
                  <p className="text-white/70 text-xs">{work.description}</p>
                </div>
                
                {/* Category badge (always visible) */}
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-medium bg-black/50 backdrop-blur-sm text-white rounded-full group-hover:opacity-0 transition-opacity duration-300">
                  {work.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center gap-8 mt-8 text-center"
      >
        <div>
          <div className="text-2xl font-bold text-primary">50+</div>
          <div className="text-xs text-muted-foreground">выполненных проектов</div>
        </div>
        <div className="w-px bg-border" />
        <div>
          <div className="text-2xl font-bold text-primary">30+</div>
          <div className="text-xs text-muted-foreground">довольных клиентов</div>
        </div>
        <div className="w-px bg-border" />
        <div>
          <div className="text-2xl font-bold text-primary">2 года</div>
          <div className="text-xs text-muted-foreground">опыта</div>
        </div>
      </motion.div>
    </div>
  );
}
