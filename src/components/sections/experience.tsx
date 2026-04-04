"use client";

import { useI18n } from "@/hooks/use-i18n";
import type { Jobs } from "@/lib/translations";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const JobCard = ({ job }: { job: Jobs }) => {

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 border-muted/50 hover:border-primary/30 border-t-4 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="font-headline text-xl tracking-tight">
          {job.company} - {job.role} ({job.period})
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="relative mt-2">
          <p className="text-muted-foreground whitespace-pre-line text-lg leading-relaxed transition-all duration-300">
            {job.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Experience() {
  const { t } = useI18n();
  const jobs: Jobs[] = t("experience.jobs") || [];

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/50 dark:bg-transparent relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-headline tracking-tight">
            {t("experience.title")}
          </h2>
          <div className="w-20 h-1.5 bg-primary/60 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}