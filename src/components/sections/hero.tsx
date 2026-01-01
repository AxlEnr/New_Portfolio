"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useI18n } from '@/hooks/use-i18n';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const { t } = useI18n();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const profileImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3 items-center">
          <div className="md:col-span-1 flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={300}
                height={300}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
              />
            )}
          </div>
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
              <span className="text-muted-foreground">{t('hero.greeting')}</span> {t('hero.name')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary font-headline">
              {t('hero.title')}
            </h2>

            <Collapsible open={isBioOpen} onOpenChange={setIsBioOpen}>
              <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                {t('hero.intro')}
              </p>
              <CollapsibleContent>
                <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground mt-4">
                  {t('hero.detailedBio')}
                </p>
              </CollapsibleContent>
              <CollapsibleTrigger asChild>
                <Button variant="link" className="px-0 text-accent">
                  {t(isBioOpen ? 'Read Less' : 'hero.readMore')}
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isBioOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
            
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <Button asChild variant="outline" size="icon" aria-label="GitHub">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" aria-label="Email">
                <a href="mailto:johndoe@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
