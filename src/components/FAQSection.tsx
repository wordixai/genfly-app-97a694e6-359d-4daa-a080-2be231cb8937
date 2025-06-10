import React from 'react';
import { Badge } from '@/components/ui/badge';

const FAQSection = () => {
  const faqs = [
    {
      question: "What exactly is ShipAny and how does it work?",
      answer: "ShipAny is a comprehensive NextJS boilerplate designed specifically for building AI SaaS startups. It provides ready-to-use templates, infrastructure setup, and deployment tools that help you launch your AI business in hours instead of days."
    },
    {
      question: "Do I need advanced technical skills to use ShipAny?", 
      answer: "While basic programming knowledge is helpful, ShipAny is designed to be developer-friendly. Our templates and documentation make it easy to get started, even if you're not an expert in AI or cloud infrastructure."
    },
    {
      question: "What types of AI SaaS can I build with ShipAny?",
      answer: "ShipAny supports a wide range of AI applications, from content generation to data analysis tools. Our templates cover popular use cases like AI chatbots, content generators, image processing apps, and more."
    },
    {
      question: "How long does it typically take to launch with ShipAny?",
      answer: "With ShipAny, you can have a working prototype in hours and a production-ready application in hours. Our one-click deployment and pre-configured infrastructure significantly reduce the traditional months-long development cycle."
    },
    {
      question: "What's included in the ShipAny infrastructure?", 
      answer: "ShipAny provides a complete infrastructure stack including authentication, database setup, API integration, payment processing, and scalable cloud deployment. Everything is pre-configured following industry best practices."
    },
    {
      question: "Can I customize the templates to match my brand?",
      answer: "Absolutely! All ShipAny templates are fully customizable. You can modify the design, features, and functionality to match your brand identity and specific business requirements while maintaining the robust underlying infrastructure."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container">
        <div className="text-center">
          <Badge className="bg-primary text-primary-foreground text-xs font-medium">
            FAQ
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold">
            Frequently Asked Questions About ShipAny
          </h2>
          <p className="mt-6 font-medium text-muted-foreground">
            Have another question? Contact us on Discord or by email.
          </p>
        </div>
        
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-primary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{faq.question}</h3>
                </div>
                <p className="text-md text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;