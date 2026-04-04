"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";

import { useI18n } from "@/hooks/use-i18n";
import type { Project } from "@/lib/translations";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

const CodeUrlLinks = ({ project, t }: { project: Project; t: any }) => {
  if (isObject(project.codeUrl)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {Object.entries(project.codeUrl).map(([key, url], index) => (
          <Button key={index} asChild variant="outline" className="w-full group">
            <a href={String(url)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              {t("projects.viewCode")} {key.charAt(0).toUpperCase() + key.slice(1)}
              <ExternalLink size={14} className="opacity-50" />
            </a>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <Button asChild variant="outline" className="w-full group">
      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
        <Github size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
        {t("projects.viewCode")}
        <ExternalLink size={14} className="opacity-50" />
      </a>
    </Button>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 border-muted/50 hover:border-primary/30 border-t-4 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="font-headline text-xl tracking-tight">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium text-xs bg-secondary/50 hover:bg-secondary transition-colors">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="relative mt-2">
          <p className="text-muted-foreground text-sm leading-relaxed transition-all duration-300">
            {expanded ? project.longDescription : project.shortDescription}
          </p>
          
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? t("projects.showLess") : t("projects.viewMore")} 
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>

        <div className="w-full pt-4 border-t border-border/50">
          <CodeUrlLinks project={project} t={t} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default function Projects() {
  const { t } = useI18n();
  const projects: Project[] = t("projects.projects") || [];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-transparent relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-headline tracking-tight">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1.5 bg-primary/60 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}