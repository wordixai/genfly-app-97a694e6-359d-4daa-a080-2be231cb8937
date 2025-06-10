import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="py-3">
      <div className="container mx-auto px-4">
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                alt="ShipAny" 
                className="w-8" 
                src="https://shipany.ai/logo1.png"
              />
              <span className="text-xl text-primary font-bold">ShipAny</span>
            </div>
            <Button 
              className="h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;