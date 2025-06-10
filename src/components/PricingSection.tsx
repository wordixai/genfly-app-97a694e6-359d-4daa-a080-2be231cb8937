import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      originalPrice: "$299",
      price: "$199",
      description: "Get started with your first SaaS startup.",
      popular: false,
      features: [
        "NextJS boilerplate",
        "SEO-friendly structure", 
        "Blog & CMS",
        "Payment with Stripe",
        "Data storage with Supabase",
        "Google Oauth & One-Tap Login",
        "i18n support"
      ]
    },
    {
      name: "Standard", 
      originalPrice: "$349",
      price: "$249",
      description: "Ship Fast with your SaaS Startups.",
      popular: true,
      features: [
        "Deploy with Vercel or Cloudflare",
        "Generation of Privacy & Terms",
        "Google Analytics Integration",
        "Google Search Console Integration", 
        "Discord community",
        "Technical support for your first ship",
        "Lifetime updates"
      ]
    },
    {
      name: "Premium",
      originalPrice: "$399", 
      price: "$299",
      description: "Ship Any AI SaaS Startups.",
      popular: false,
      features: [
        "More Components for choosing",
        "Business Functions & SDK with AI",
        "User Console",
        "Admin System",
        "Credits Management",
        "API Keys Management",
        "Priority Technical Support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 text-center">
          <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
            Pricing
          </h2>
          <p className="mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg mx-auto">
            Get all features of ShipAny, Ship your AI SaaS startups fast.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-full mt-0 grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-lg p-6 ${plan.popular ? 'border-primary border-2 bg-card text-card-foreground' : 'border-muted border'}`}
              >
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <div className="flex-1" />
                      {plan.popular && (
                        <Badge className="border-primary bg-primary text-primary-foreground">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-xl text-muted-foreground font-semibold line-through">
                        {plan.originalPrice}
                      </span>
                      <span className="text-5xl font-semibold">{plan.price}</span>
                      <span className="block font-semibold">USD</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <p className="mb-3 mt-6 font-semibold">
                      {index === 0 ? "Includes" : `Everything in ${index === 1 ? "Starter" : "Standard"}, plus`}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="mt-1 size-4 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    {plan.name === "Premium" && (
                      <div className="flex items-center gap-x-2 mt-2 mb-4">
                        <span className="text-sm underline cursor-pointer px-2">
                          Checkout with Promotion Code 👉
                        </span>
                      </div>
                    )}
                    <Button className="w-full flex items-center justify-center gap-2 font-semibold">
                      <p>Get ShipAny</p>
                      <Zap className="size-4" />
                    </Button>
                    <p className="text-muted-foreground text-sm mt-2">
                      Pay once. Build unlimited projects!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;