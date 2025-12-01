"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
  CheckCircle2,
  LucideIcon
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

  if (!project) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-gradient-to-br from-background to-muted/30 border-0">
        {/* Gradient glow effect */}
        <div 
          className="absolute -inset-1 rounded-xl opacity-30 blur-2xl -z-10"
          style={{ background: project.gradient }}
        />
        
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Screenshots */}
          <div className="relative bg-gradient-to-br from-muted/50 to-muted aspect-square md:aspect-auto">
            {hasScreenshots ? (
              <>
                {/* Screenshot slider */}
                <div className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center p-8"
                    >
                      <div className="relative w-full h-full max-w-[280px] mx-auto">
                        {/* Phone frame */}
                        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl" />
                        <div className="absolute inset-[3px] bg-black rounded-[2.8rem] overflow-hidden">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-10" />
                          {/* Screenshot */}
                          <Image
                            src={screenshots[currentSlide]}
                            alt={`${project.title} screenshot ${currentSlide + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  {screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </>
                  )}

                  {/* Dots indicator */}
                  {screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentSlide 
                              ? "bg-white w-6" 
                              : "bg-white/50 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Placeholder when no screenshots */
              <div className="h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center">
                <div 
                  className="p-8 rounded-3xl"
                  style={{ background: `${project.gradient}20` }}
                >
                  <IconComponent className="w-24 h-24 text-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Right side - Info */}
          <div className="p-6 md:p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-3 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${project.gradient})`, opacity: 0.2 }}
              >
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <Badge 
                  variant="secondary" 
                  className="mt-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Мой проект
                </Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                Возможности
              </h4>
              <div className="space-y-2">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-muted/50">
                {project.stats.users && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-xl font-bold text-primary">
                      <Users className="w-5 h-5" />
                      {project.stats.users}
                    </div>
                    <div className="text-xs text-muted-foreground">Пользователей</div>
                  </div>
                )}
                {project.stats.messages && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-xl font-bold text-primary">
                      <MessageSquare className="w-5 h-5" />
                      {project.stats.messages}
                    </div>
                    <div className="text-xs text-muted-foreground">Сообщений/день</div>
                  </div>
                )}
                {project.stats.rating && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-xl font-bold text-amber-500">
                      <Star className="w-5 h-5 fill-amber-500" />
                      {project.stats.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">Рейтинг</div>
                  </div>
                )}
              </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* CTA */}
            <Button 
              asChild 
              size="lg"
              className="w-full group/btn relative overflow-hidden text-white"
              style={{ 
                background: `linear-gradient(135deg, ${project.gradient})`,
              }}
            >
              <Link 
                href={project.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Открыть в Telegram
                  <ExternalLink className="w-5 h-5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
