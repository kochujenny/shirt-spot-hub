import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tag } from 'lucide-react';
import saleBanner from '@/assets/sale-banner.jpg';

interface SaleSectionProps {
  onShopSale: () => void;
}

const SaleSection: React.FC<SaleSectionProps> = ({ onShopSale }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-16">
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-6 w-6" />
              <span className="text-lg font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              50% OFF
              <span className="block text-2xl lg:text-3xl font-normal opacity-90">
                Everything Must Go!
              </span>
            </h2>
            
            <p className="text-lg opacity-90 max-w-md">
              Don't miss out on our biggest sale of the year. Premium t-shirts at unbeatable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8"
                onClick={onShopSale}
              >
                Shop Sale Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
              >
                View All Deals
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm opacity-75">
              <span>✓ Free Shipping</span>
              <span>✓ Easy Returns</span>
              <span>✓ Limited Stock</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
            <img
              src={saleBanner}
              alt="50% Off Sale"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
      </div>
    </section>
  );
};

export default SaleSection;