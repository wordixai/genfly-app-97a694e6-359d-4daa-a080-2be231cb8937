import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "ShipAny has made the journey from idea to product simpler than ever before. Its comprehensive templates, scripts, and foundational infrastructure mean I hardly need to spend time on basic development. I highly recommend it to founders looking to quickly launch their SaaS businesses.",
      author: "blank",
      role: "Author of AITDK",
      avatar: "https://shipany.ai/imgs/users/27.png"
    },
    {
      content: "ShipAny made it super easy to set up payments and handle all the nuts and bolts of commercialization, so we could stay laser-focused on building features that matter. If you're looking to ship and scale your AI SaaS fast, ShipAny is a no-brainer!",
      author: "Scar", 
      role: "Front-end Engineer",
      avatar: "https://shipany.ai/imgs/users/22.png"
    },
    {
      content: "I used ShipAny and launched a new website in 8 minutes, including login/payment, so amazing!",
      author: "Lafe",
      role: "Tech Lead", 
      avatar: "https://shipany.ai/imgs/users/23.png"
    }
  ];

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-4 mb-16">
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">
          What Users Say About ShipAny
        </h2>
        <p className="text-center text-muted-foreground lg:text-lg px-8">
          Hear from developers and founders who launched their AI startups with ShipAny.
        </p>
      </div>
      
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="mb-8 max-w-4xl font-normal md:px-8 lg:text-xl leading-loose">
            "{testimonials[0].content}"
          </p>
          <Avatar className="mb-2 size-12 md:size-24">
            <AvatarImage src={testimonials[0].avatar} alt={testimonials[0].author} />
            <AvatarFallback>{testimonials[0].author[0]}</AvatarFallback>
          </Avatar>
          <p className="mb-1 text-sm font-medium md:text-lg">{testimonials[0].author}</p>
          <p className="mb-2 text-sm text-muted-foreground md:text-lg">{testimonials[0].role}</p>
          <div className="mt-2 flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-primary stroke-none" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;