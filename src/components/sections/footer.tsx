"use client";

import { Button } from '@/components/ui/button';
import { useI18n } from '@/hooks/use-i18n';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Email">
            <a href="mailto:johndoe@example.com">
              <Mail className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          {t('footer.madeWith')} <Heart className="w-4 h-4 text-primary" /> {t('footer.by')}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2">
          © {new Date().getFullYear()} {t('hero.name')}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
