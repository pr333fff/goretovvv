"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-3">
            <Badge 
              variant="secondary" 
              className="shrink-0"
            >
              {project.category === "bot" && "Telegram-бот"}
              {project.category === "miniapp" && "Mini App"}
              {project.category === "automation" && "Автоматизация"}
            </Badge>
          </div>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden relative">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          )}
        </div>

        {/* Features list */}
        <div className="space-y-3">
          <h4 className="font-semibold">Возможности:</h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          {project.telegramUrl && (
            <Button asChild className="flex-1">
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
          <Button variant="outline" onClick={onClose} className="flex-1">
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
