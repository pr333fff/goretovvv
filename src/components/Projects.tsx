"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, Project } from "@/data/projects";
import { featuredProjects } from "@/data/featuredProjects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Featured Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Мои проекты
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Работающие боты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные проекты, которые я разработал и поддерживаю. Можете протестировать прямо сейчас!
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-muted-foreground text-sm">
              Примеры решений для вашего бизнеса
            </span>
          </div>
        </div>

        {/* Other Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Портфолио
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовые решения
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Примеры проектов, которые можно адаптировать под ваши задачи
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onShowDetails={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              В этой категории пока нет проектов
            </p>
          </motion.div>
        )}

        {/* Project modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
