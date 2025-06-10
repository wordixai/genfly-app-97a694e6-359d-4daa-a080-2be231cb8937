import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// Using placeholder icons since the HTML uses custom SVGs
import { Zap, Sparkles, Code } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="size-5 shrink-0 lg:size-6" />,
      title: "Complete Framework",
      content: "Get everything you need to build scalable AI applications with our comprehensive framework and tools."
    },
    {
      icon: <Sparkles className="size-5 shrink-0 lg:size-6" />,
      title: "Rich Templates Library", 
      content: "Choose from various AI SaaS templates to kickstart your project - chatbots, image generation, and more."
    },
    {
      icon: <Code className="size-5 shrink-0 lg:size-6" />,
      title: "Technical Guidance",
      content: "Get comprehensive technical support and guidance to help you launch faster."
    }
  ];

  const images = [
    { title: "Complete Framework", src: "https://shipany.ai/imgs/features/11.png" },
    { title: "Rich Templates Library", src: "https://shipany.ai/imgs/features/12.png" },
    { title: "Technical Guidance", src: "https://shipany.ai/imgs/features/13.png" }
  ];

  return (
    <section id="benefit" className="py-32">
      <div className="container">
        <div className="mx-auto grid gap-20 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">
              Benefits
            </Badge>
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
              Why Choose ShipAny
            </h2>
            <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              Get everything you need to launch your AI startup - from ready-to-use templates to technical support.
            </p>
            
            <Accordion type="single" defaultValue="item-1" className="w-full">
              {benefits.map((benefit, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-0 border-secondary">
                  <AccordionTrigger className="text-left data-[state=closed]:text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                        {benefit.icon}
                      </div>
                      <span className="font-medium lg:text-lg">{benefit.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground lg:text-base">
                    {benefit.content}
                    <div className="mt-8 h-px bg-muted">
                      <div className="h-px animate-pulse bg-primary w-1/2" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="h-full flex items-center justify-center">
            <div className="w-full">
              <img 
                alt="Rich Templates Library"
                className="max-h-auto w-full object-cover lg:max-h-none rounded-md"
                src="https://shipany.ai/imgs/features/12.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;