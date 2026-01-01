"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useI18n } from '@/hooks/use-i18n';
import type { Project } from '@/lib/translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProjectCard = ({ project, onOpenDialog }: { project: Project, onOpenDialog: (project: Project) => void }) => {
  const { t } = useI18n();
  const thumbImage = PlaceHolderImages.find(p => p.id === project.thumbId);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        {thumbImage && (
          <Image
            src={thumbImage.imageUrl}
            alt={project.title}
            data-ai-hint={thumbImage.imageHint}
            width={600}
            height={400}
            className="object-cover rounded-t-lg aspect-[3/2]"
          />
        )}
        <CardTitle className="pt-4 font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button onClick={() => onOpenDialog(project)} className="w-full">{t('projects.viewDetails')}</Button>
        <Button asChild variant="outline" className="w-full">
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">{t('projects.viewCode')}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Projects() {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = t('projects.projects');

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };
  
  const carouselImages = selectedProject ? PlaceHolderImages.filter(p => selectedProject.carouselImageIds.includes(p.id)) : [];

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} onOpenDialog={handleOpenDialog} />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
        <DialogContent className="sm:max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={img.imageUrl}
                        alt={`${selectedProject.title} - screenshot ${index + 1}`}
                        data-ai-hint={img.imageHint}
                        width={800}
                        height={600}
                        className="w-full object-contain rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
