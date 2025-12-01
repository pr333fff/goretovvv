"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Users, 
  MessageSquare, 
  Star,
  Sparkles,
  Bot,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

export interface FeaturedProjectData {
  id: string;
  title: string;
  description: string;
  features: string[];
  telegramUrl: string;
  stats?: {
    users?: string;
    messages?: string;
    rating?: string;
  };
  gradient: string;
  icon?: LucideIcon;
  demoAvailable?: boolean;
}

interface FeaturedProjectProps {
  project: FeaturedProjectData;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const IconComponent = project.icon || Bot;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50">
        {/* Gradient border effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: project.gradient,
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor'
          }}
        />
        
        {/* Glow effect */}
        <div 
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
          style={{ background: project.gradient }}
        />
        
        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="p-3 rounded-xl"
                style={{ background: `${project.gradient.split(',')[1]?.trim() || '#3b82f6'}20` }}
              >
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Badge 
                  variant="secondary" 
                  className="mt-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Мой проект
                </Badge>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feature, i) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="bg-muted/50"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-muted/30">
              {project.stats.users && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary">
                    <Users className="w-4 h-4" />
                    {project.stats.users}
                  </div>
                  <div className="text-xs text-muted-foreground">Пользователей</div>
                </div>
              )}
              {project.stats.messages && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary">
                    <MessageSquare className="w-4 h-4" />
                    {project.stats.messages}
                  </div>
                  <div className="text-xs text-muted-foreground">Сообщений/день</div>
                </div>
              )}
              {project.stats.rating && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    {project.stats.rating}
                  </div>
                  <div className="text-xs text-muted-foreground">Рейтинг</div>
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <Button 
            asChild 
            className="w-full group/btn relative overflow-hidden"
            style={{ 
              background: project.gradient,
            }}
          >
            <Link 
              href={project.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Попробовать бота
                <ExternalLink className="w-4 h-4" />
              </span>
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
