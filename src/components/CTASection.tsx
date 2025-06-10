import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="cta" className="py-16">
      <div className="px-8">
        <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 px-8 py-12 text-center md:p-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Ship your first AI SaaS Startup
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Start from here, ship with ShipAny.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild>
                <a href="https://shipany.ai/" target="_blank" className="flex items-center justify-center gap-1">
                  Get ShipAny
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://docs.shipany.ai/" target="_blank" className="flex items-center justify-center gap-1">
                  Read Document
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;