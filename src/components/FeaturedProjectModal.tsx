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

  // Parse gradient colors
  const gradientColors = project.gradient
    .replace('from-', '')
    .replace('to-', '')
    .split(',')
    .map(c => c.trim());
  
  const gradientStyle = `linear-gradient(135deg, var(--tw-gradient-stops))`;

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg md:max-h-[85vh] bg-background rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-border"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 p-2 rounded-full bg-background/80 hover:bg-muted transition-colors shadow-lg border border-border"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">
              {/* Header area with gradient */}
              <div 
                className={`relative h-40 md:h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                {hasScreenshots ? (
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center p-4"
                      >
                        {/* Phone mockup */}
                        <div className="relative h-full aspect-[9/16] max-h-[160px]">
                          <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-2xl" />
                          <div className="absolute inset-[2px] bg-black rounded-[14px] overflow-hidden">
                            <Image
                              src={screenshots[currentSlide]}
                              alt={`${project.title} screenshot`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    {screenshots.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {screenshots.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentSlide(i)}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                i === currentSlide ? "bg-white w-4" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className={`p-2 rounded-xl flex-shrink-0 bg-gradient-to-br ${project.gradient} bg-opacity-20`}
                    style={{ opacity: 0.15 }}
                  >
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-xl font-bold truncate">{project.title}</h2>
                    <Badge 
                      variant="secondary" 
                      className="mt-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30 text-xs"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Мой проект
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.fullDescription || project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                    Возможности
                  </h4>
                  <div className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-muted/50">
                    {project.stats.users && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-sm font-bold text-primary">
                          <Users className="w-3.5 h-3.5" />
                          {project.stats.users}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Пользователей</div>
                      </div>
                    )}
                    {project.stats.messages && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-sm font-bold text-primary">
                          <MessageSquare className="w-3.5 h-3.5" />
                          {project.stats.messages}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Сообщений</div>
                      </div>
                    )}
                    {project.stats.rating && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-sm font-bold text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          {project.stats.rating}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Рейтинг</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Fixed CTA button */}
            <div className="p-4 border-t bg-background">
              <Button 
                asChild 
                size="lg"
                className={`w-full text-white bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}
              >
                <Link 
                  href={project.telegramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Открыть в Telegram
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
