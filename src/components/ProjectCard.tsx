"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onShowDetails: (project: Project) => void;
}

export function ProjectCard({ project, index, onShowDetails }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
        {/* Image */}
        <CardHeader className="p-0 relative overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <Badge 
                variant="secondary" 
                className="bg-background/90 backdrop-blur-sm"
              >
                {project.category === "bot" && "Telegram-бот"}
                {project.category === "miniapp" && "Mini App"}
                {project.category === "automation" && "Автоматизация"}
              </Badge>
            </div>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1.5">
            {project.features.map((feature) => (
              <Badge 
                key={feature} 
                variant="outline"
                className="text-xs"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Actions */}
        <CardFooter className="p-5 pt-0 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onShowDetails(project)}
          >
            <Info className="w-4 h-4 mr-1.5" />
            Подробнее
          </Button>
          {project.telegramUrl && (
            <Button 
              asChild 
              size="sm" 
              className="flex-1"
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
