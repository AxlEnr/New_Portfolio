"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Globe, Menu, Code } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navLinks = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'certificates', labelKey: 'nav.certificates' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const isMobile = useIsMobile();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleResumeDownload = (language: 'en' | 'es') => {
    alert(`Downloading ${language.toUpperCase()} resume...`);
  };

  const NavContent = ({ isMobile = false }) => (
    <nav className={cn(
      "flex items-center gap-6 text-sm font-medium",
      isMobile && "flex-col items-start gap-4 text-lg"
    )}>
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="transition-colors hover:text-primary"
          onClick={() => isMobile && setSheetOpen(false)}
        >
          {t(link.labelKey)}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex ml-1 md:ml-4 items-center gap-2 font-bold text-lg font-headline">
          {/* <Code className="h-6 w-6 text-primary" /> */}
          <span>{t('hero.name')}</span>
        </a>

        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-16">
              <NavContent isMobile />
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-4">
            <NavContent />

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    {lang.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang('es')}>Español</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    {t('header.downloadResume')}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleResumeDownload('en')}>
                    {t('header.downloadEnglish')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleResumeDownload('es')}>
                    {t('header.downloadSpanish')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
