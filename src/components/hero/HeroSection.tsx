import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/tshirt-hero.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Premium T-Shirts
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  For Every Style
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover our collection of premium quality t-shirts made from the finest materials. 
                Comfort meets style in every piece.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Collection
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">↩️</span>
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10 blur-xl"></div>
            <img
              src={heroImage}
              alt="Premium T-Shirt Collection"
              className="relative z-10 w-full h-auto rounded-3xl shadow-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;