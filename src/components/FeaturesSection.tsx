import React from 'react';
import { Zap, Settings, Database, Cloud, BarChart3, Bot } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="size-8 text-primary" />,
      title: "Next.js Boilerplate",
      description: "Production-ready Next.js templates with SEO-friendly structure and i18n support."
    },
    {
      icon: <Settings className="size-8 text-primary" />,
      title: "Authentication & Payments",
      description: "Integrated Google OAuth, one-tap login, and Stripe payment processing."
    },
    {
      icon: <Database className="size-8 text-primary" />,
      title: "Data Infrastructure",
      description: "Built-in Supabase integration for reliable and scalable data storage."
    },
    {
      icon: <Cloud className="size-8 text-primary" />,
      title: "One-Click Deployment",
      description: "Seamless deployment to Vercel or Cloudflare with automated setup."
    },
    {
      icon: <BarChart3 className="size-8 text-primary" />,
      title: "Business Analytics",
      description: "Integrated Google Analytics and Search Console for tracking growth."
    },
    {
      icon: <Bot className="size-8 text-primary" />,
      title: "AI-Ready Infrastructure",
      description: "Pre-configured AI integration with built-in credits system and API sales."
    }
  ];

  return (
    <section id="feature" className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
          <h2 className="mb-2 text-pretty text-3xl font-bold lg:text-4xl">
            Key Features of ShipAny
          </h2>
          <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
            Everything you need to launch your AI SaaS startup quickly and efficiently.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full border border-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;