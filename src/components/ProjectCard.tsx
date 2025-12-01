"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info, Bot, Layers, Zap, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onShowDetails: (project: Project) => void;
}

const categoryConfig = {
  bot: { label: "Telegram-бот", icon: Bot, gradient: "from-blue-500 to-cyan-400", color: "text-blue-500" },
  miniapp: { label: "Mini App", icon: Layers, gradient: "from-purple-500 to-pink-400", color: "text-purple-500" },
  automation: { label: "Автоматизация", icon: Zap, gradient: "from-amber-500 to-orange-400", color: "text-amber-500" },
};

export function ProjectCard({ project, index, onShowDetails }: ProjectCardProps) {
  const config = categoryConfig[project.category];
  const CategoryIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm">
        {/* Image */}
        <CardHeader className="p-0 relative overflow-hidden">
          <div className={`aspect-video bg-gradient-to-br ${config.gradient} relative`}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Quick view button on hover */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <Badge 
                variant="secondary" 
                className="bg-white/90 backdrop-blur-sm text-foreground gap-1.5 font-medium shadow-lg"
              >
                <CategoryIcon className={`w-3.5 h-3.5 ${config.color}`} />
                {config.label}
              </Badge>
            </div>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1.5">
            {project.features.slice(0, 3).map((feature) => (
              <Badge 
                key={feature} 
                variant="outline"
                className="text-xs bg-muted/50 hover:bg-muted transition-colors"
              >
                {feature}
              </Badge>
            ))}
            {project.features.length > 3 && (
              <Badge variant="outline" className="text-xs bg-muted/50">
                +{project.features.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        {/* Actions */}
        <CardFooter className="p-5 pt-0 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 group/btn hover:border-primary/50 hover:bg-primary/5"
            onClick={() => onShowDetails(project)}
          >
            <Info className="w-4 h-4 mr-1.5 group-hover/btn:scale-110 transition-transform" />
            Подробнее
          </Button>
          {project.telegramUrl && (
            <Button 
              asChild 
              size="sm" 
              className={`flex-1 bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white border-0`}
            >
              <a 
                href={project.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Открыть
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
