"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { useI18n } from "@/hooks/use-i18n";
import type { Project } from "@/lib/translations";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="pt-4 font-headline">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="relative">
          <p
            className={`text-muted-foreground text-sm transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {expanded
              ? project.longDescription
              : project.shortDescription}
          </p>

          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button
          variant="ghost"
          className="w-full flex items-center gap-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Mostrar menos" : "Ver más"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>

        <Button asChild variant="outline" className="w-full">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projects.viewCode")}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Projects() {
  const { t } = useI18n();
  const projects: Project[] = t("projects.projects");

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

