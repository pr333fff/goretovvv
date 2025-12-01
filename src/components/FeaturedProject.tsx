"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { 
  Users, 
  MessageSquare, 
  Star,
  Sparkles,
  Bot,
  LucideIcon,
  ArrowRight,
  Play
} from "lucide-react";

export interface FeaturedProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  features: string[];
  telegramUrl: string;
  screenshots?: string[];
  previewImage?: string; // 16:9 preview image
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
  onClick?: () => void;
}

export function FeaturedProject({ project, index, onClick }: FeaturedProjectProps) {
  const IconComponent = project.icon || Bot;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -8 }}
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
        {/* Animated gradient border effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: project.gradient,
            padding: '1.5px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor'
          }}
        />
        
        {/* Glow effect */}
        <div 
          className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700"
          style={{ background: project.gradient }}
        />
        
        {/* Preview Image Section */}
        {project.previewImage && (
          <div className="relative overflow-hidden">
            {/* Image container with aspect ratio */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={project.previewImage}
                alt={`${project.title} preview`}
                fill
                className="object-cover scale-[1.2] transition-transform duration-700 group-hover:scale-[1.25]"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`} />
              
              {/* Play/View button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl"
                >
                  <Play className="w-8 h-8 text-white fill-white" />
                </motion.div>
              </div>

              {/* Badge overlay */}
              <div className="absolute top-4 left-4">
                <Badge 
                  className="bg-black/40 backdrop-blur-md text-white border-white/20 shadow-lg"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Мой проект
                </Badge>
              </div>

              {/* Stats overlay on image */}
              {project.stats && (
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {project.stats.users && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-sm">
                      <Users className="w-3.5 h-3.5" />
                      <span className="font-semibold">{project.stats.users}</span>
                    </div>
                  )}
                  {project.stats.rating && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-amber-400 text-sm">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-semibold">{project.stats.rating}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div 
                className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Features - compact */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.features.slice(0, 4).map((feature, i) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="bg-muted/50 text-xs py-0.5"
              >
                {feature}
              </Badge>
            ))}
            {project.features.length > 4 && (
              <Badge variant="outline" className="bg-muted/50 text-xs py-0.5">
                +{project.features.length - 4}
              </Badge>
            )}
          </div>

          {/* CTA */}
          <Button 
            className="w-full group/btn relative overflow-hidden text-white shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${project.gradient})`,
            }}
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Подробнее
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
