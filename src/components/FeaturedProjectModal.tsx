"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Users, 
  MessageSquare, 
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Bot,
  X,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeaturedProjectData } from "./FeaturedProject";

interface FeaturedProjectModalProps {
  project: FeaturedProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FeaturedProjectModal({ project, isOpen, onClose }: FeaturedProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project || !isOpen) return null;

  const IconComponent = project.icon || Bot;
  const screenshots = project.screenshots || [];
  const hasScreenshots = screenshots.length > 0;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Modal - Full screen on mobile, centered on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-background md:rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col md:border md:border-border"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Main content - Two column layout on desktop */}
            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              
              {/* Left side - Screenshots carousel */}
              <div className={`relative md:w-1/2 h-[45vh] md:h-auto bg-gradient-to-br ${project.gradient} flex-shrink-0`}>
                {hasScreenshots ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Screenshots horizontal scroll */}
                    <div className="flex items-center justify-center gap-4 px-4 h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-[85%] aspect-[9/16] flex-shrink-0"
                        >
                          {/* Phone frame */}
                          <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] shadow-2xl ring-4 ring-gray-800" />
                          {/* Screen */}
                          <div className="absolute inset-[3px] bg-black rounded-[2.3rem] overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
                            <Image
                              src={screenshots[currentSlide]}
                              alt={`${project.title} screenshot ${currentSlide + 1}`}
                              fill
                              className="object-cover"
                              priority
                            />
                          </div>
                          {/* Home indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Navigation arrows */}
                    {screenshots.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110"
                        >
                          <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110"
                        >
                          <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                      </>
                    )}

                    {/* Dots indicator */}
                    {screenshots.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm">
                        {screenshots.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`transition-all duration-300 rounded-full ${
                              i === currentSlide 
                                ? "w-6 h-2 bg-white" 
                                : "w-2 h-2 bg-white/50 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Screenshot counter */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm font-medium">
                      {currentSlide + 1} / {screenshots.length}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm">
                      <IconComponent className="w-20 h-20 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right side - Content */}
              <div className="flex-1 flex flex-col overflow-hidden md:w-1/2">
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                      <Badge 
                        variant="secondary" 
                        className="mt-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30"
                      >
                        <Sparkles className="w-3.5 h-3.5 mr-1" />
                        Мой проект
                      </Badge>
                    </div>
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {project.stats.users && (
                        <div className="text-center p-3 rounded-xl bg-muted/50 border border-border/50">
                          <div className="flex items-center justify-center gap-1.5 text-lg font-bold text-primary">
                            <Users className="w-4 h-4" />
                            {project.stats.users}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">Пользователей</div>
                        </div>
                      )}
                      {project.stats.messages && (
                        <div className="text-center p-3 rounded-xl bg-muted/50 border border-border/50">
                          <div className="flex items-center justify-center gap-1.5 text-lg font-bold text-primary">
                            <MessageSquare className="w-4 h-4" />
                            {project.stats.messages}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">Сообщений</div>
                        </div>
                      )}
                      {project.stats.rating && (
                        <div className="text-center p-3 rounded-xl bg-muted/50 border border-border/50">
                          <div className="flex items-center justify-center gap-1.5 text-lg font-bold text-amber-500">
                            <Star className="w-4 h-4 fill-amber-500" />
                            {project.stats.rating}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">Рейтинг</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">О проекте</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Возможности</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className={`p-1 rounded-md bg-gradient-to-br ${project.gradient}`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fixed CTA button */}
                <div className="p-4 border-t bg-background/80 backdrop-blur-sm">
                  <Button 
                    asChild 
                    size="lg"
                    className={`group relative w-full text-white bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg overflow-hidden`}
                  >
                    <Link 
                      href={project.telegramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {/* Shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center gap-2">
                        Открыть в Telegram
                        <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
