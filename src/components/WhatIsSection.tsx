import React from 'react';
import { Check, Database, Cloud } from 'lucide-react';

// Note: We'll use Zap instead of the custom icon from HTML
const WhatIsSection = () => {
  const features = [
    {
      icon: <Check className="mr-2 size-6 shrink-0 lg:mr-2 lg:size-6" />,
      title: "Ready-to-use Templates",
      description: "Choose from dozens of production-ready AI SaaS templates to quickly start your project."
    },
    {
      icon: <Database className="mr-2 size-6 shrink-0 lg:mr-2 lg:size-6" />,
      title: "Infrastructure Setup", 
      description: "Get instant access to scalable infrastructure with best practices built-in."
    },
    {
      icon: <Cloud className="mr-2 size-6 shrink-0 lg:mr-2 lg:size-6" />,
      title: "Quick Deployment",
      description: "Deploy your AI SaaS application to production in hours, not days."
    }
  ];

  return (
    <section id="introduce" className="py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <video 
            src="/videos/what.mp4" 
            autoPlay 
            loop 
            className="max-h-full w-full rounded-md object-cover"
          />
          <div className="flex flex-col lg:text-left">
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
              What is ShipAny
            </h2>
            <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              ShipAny is a NextJS boilerplate for building AI SaaS startups. 
              Built in a variety of templates and components.
            </p>
            <ul className="flex flex-col justify-center gap-y-8">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  {feature.icon}
                  <div>
                    <div className="mb-3 h-5 text-sm font-semibold text-accent-foreground md:text-base">
                      {feature.title}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground md:text-base">
                      {feature.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;