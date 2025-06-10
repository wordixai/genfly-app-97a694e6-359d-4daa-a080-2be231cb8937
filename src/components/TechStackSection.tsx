import React from 'react';

const TechStackSection = () => {
  const techs = [
    { name: 'Next.js', logo: 'https://shipany.ai/imgs/logos/nextjs.svg' },
    { name: 'React', logo: 'https://shipany.ai/imgs/logos/react.svg' },
    { name: 'TailwindCSS', logo: 'https://shipany.ai/imgs/logos/tailwindcss.svg' },
    { name: 'Shadcn/UI', logo: 'https://shipany.ai/imgs/logos/shadcn.svg' },
    { name: 'Vercel', logo: 'https://shipany.ai/imgs/logos/vercel.svg' }
  ];

  return (
    <section className="py-16">
      <div className="container flex flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-muted-foreground lg:text-left">
            ShipAny is built on the shoulders of giants
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
            {techs.map((tech) => (
              <img 
                key={tech.name}
                alt={tech.name}
                className="h-7 dark:invert"
                src={tech.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;