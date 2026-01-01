"use client";

import { useI18n } from '@/hooks/use-i18n';
import TechIcon from '@/components/tech-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mainStack = ['laravel', 'express', 'angular', 'mysql', 'mongo'];
const otherTechs = ['react', 'nest', 'flutter', 'django', 'python', 'java', 'html', 'css', 'tailwind'];

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">{t('skills.mainStack')}</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {mainStack.map((tech) => (
                <TechIcon key={tech} tech={tech} />
              ))}
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto h-px bg-border"></div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">{t('skills.otherTech')}</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {otherTechs.map((tech) => (
                <TechIcon key={tech} tech={tech} small />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
