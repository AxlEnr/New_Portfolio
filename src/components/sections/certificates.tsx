"use client";

import Image from 'next/image';
import { useI18n } from '@/hooks/use-i18n';
import type { Certificate } from '@/lib/translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Certificates() {
  const { t } = useI18n();
  const certificates: Certificate[] = t('certificates.certificates');

  return (
    <section id="certificates" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">{t('certificates.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(cert => {
            const certImage = PlaceHolderImages.find(p => p.id === cert.imageId);
            return (
              <Card key={cert.id} className="overflow-hidden text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  {certImage && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={certImage.imageUrl}
                        alt={cert.title}
                        data-ai-hint={certImage.imageHint}
                        width={300}
                        height={200}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <CardTitle className="font-headline">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{cert.issuer}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
