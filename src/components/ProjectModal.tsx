"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Sparkles, Bot, Layers, Zap } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryConfig = {
  bot: { label: "Telegram-бот", icon: Bot, gradient: "from-blue-500 to-cyan-400" },
  miniapp: { label: "Mini App", icon: Layers, gradient: "from-purple-500 to-pink-400" },
  automation: { label: "Автоматизация", icon: Zap, gradient: "from-amber-500 to-orange-400" },
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const config = categoryConfig[project.category];
  const CategoryIcon = config.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-0 bg-background/95 backdrop-blur-xl">
        {/* Gradient header */}
        <div className={`relative h-48 bg-gradient-to-br ${config.gradient} overflow-hidden`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-30"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ) : null}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge 
              variant="secondary" 
              className="bg-white/90 backdrop-blur-sm text-foreground gap-1.5 px-3 py-1"
            >
              <CategoryIcon className="w-3.5 h-3.5" />
              {config.label}
            </Badge>
          </div>
          
          {/* Icon */}
          <div className="absolute bottom-4 left-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <CategoryIcon className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="p-6 pt-4">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {/* Features list */}
          <div className="mt-6 space-y-4">
            <h4 className="font-semibold flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Возможности
            </h4>
            <div className="grid gap-2">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="p-1 rounded-full bg-primary/10">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            {project.telegramUrl && (
              <Button 
                asChild 
                className={`flex-1 bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white border-0`}
              >
                <a
                  href={project.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Открыть в Telegram
                </a>
              </Button>
            )}
            <Button 
              variant="outline" 
              onClick={onClose} 
              className="flex-1 hover:bg-muted"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
