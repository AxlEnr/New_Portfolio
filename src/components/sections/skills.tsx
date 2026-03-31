"use client";

import { useI18n } from '@/hooks/use-i18n';
import TechIcon from '@/components/tech-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// 🔥 fallback (por si aún no migras completamente)
const mainStackFallback = ['laravel', 'react', 'mongoDB', 'mysql'];
const otherTechFallback = ['angular', 'flutter', 'django', 'sqlite', 'postgresql'];

export default function Skills() {
  const { t } = useI18n();

  // 🔥 nuevo stack dinámico desde translations
  const stack = t('skills.stack');

  const categories = [
    { key: 'backend', label: t('skills.backend') },
    { key: 'frontend', label: t('skills.frontend') },
    { key: 'mobile', label: t('skills.mobile') },
    { key: 'databases', label: t('skills.databases') },
    { key: 'devops', label: t('skills.devops') },
    { key: 'tools', label: t('skills.tools') },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-center mb-6">
              {t('skills.mainStack')}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {mainStackFallback.map((tech) => (
                <TechIcon key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-center mb-6">
              {t('skills.otherTech')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {otherTechFallback.map((tech) => (
                <TechIcon key={tech} tech={tech} small />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto h-px bg-border my-12"></div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const techs = stack?.[category.key] || [];

            if (!techs.length) return null;

            return (
              <Card key={category.key} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center text-lg">
                    {category.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-4">
                    {techs.map((tech: string) => (
                      <TechIcon key={tech} tech={tech.toLowerCase()} small />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}