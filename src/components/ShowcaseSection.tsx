import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ShowcaseSection = () => {
  const showcases = [
    { name: "Raphael AI", description: "Create stunning AI-generated images in seconds", image: "https://r2.trys.ai/imgs/1kk9lxwb9-1737207119911.png", url: "https://raphael.app/" },
    { name: "SiteSnapper", description: "Capture Any Website in One Click", image: "https://r2.trys.ai/imgs/2g3jgkjtf-1736839117330.png", url: "https://sitesnapper.app/" },
    { name: "SEO Combine", description: "All SEO Tools Combined in One Place", image: "https://r2.trys.ai/imgs/mflhkm6l-1736839653679.png", url: "https://seocombine.com/" },
    { name: "TrendsBar", description: "Google Trends Analysis Tool", image: "https://r2.trys.ai/imgs/1redymxtb-1736000525029.png", url: "https://trendsbar.net/" },
    { name: "Deepseek Artifacts", description: "Create React Apps Using the World's Leading Open-Source Model", image: "https://r2.trys.ai/imgs/xoi8kez7-1736839846050.png", url: "https://deepseekartifacts.com/" }
  ];

  return (
    <section id="showcase" className="py-16">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <h2 className="mb-2 text-pretty text-3xl font-bold lg:text-4xl">
            AI SaaS Startups built with ShipAny
          </h2>
          <div className="shrink-0 gap-2 md:flex">
            <Button variant="ghost" size="icon" disabled>
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        
        <div className="w-full overflow-hidden">
          <div className="flex gap-5">
            {showcases.map((item, index) => (
              <div key={index} className="min-w-0 shrink-0 basis-full max-w-[320px] lg:max-w-[360px]">
                <a 
                  href={item.url} 
                  target="_blank" 
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img 
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                            src={item.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.name}
                  </div>
                  <div className="mb-2 line-clamp-2 text-sm text-muted-foreground md:mb-2 md:text-base lg:mb-2">
                    {item.description}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;