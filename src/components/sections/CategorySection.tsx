import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  onCategorySelect: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 'mens',
      title: 'Men\'s Collection',
      description: 'Classic and modern styles for every occasion',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 'womens',
      title: 'Women\'s Collection',
      description: 'Feminine cuts and trendy designs',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      id: 'graphic',
      title: 'Graphic Tees',
      description: 'Express yourself with unique designs',
      gradient: 'from-green-500 to-teal-600',
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    // Map category IDs to actual filter values
    const categoryMap = {
      'mens': 'Basic Tees',
      'womens': 'Women\'s Basic',
      'graphic': 'Graphic Tees',
    };
    
    onCategorySelect(categoryMap[categoryId as keyof typeof categoryMap] || 'All');
    
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover our curated collections designed for every style and preference
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-2xl p-8 text-white cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-500`}></div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <p className="opacity-90">{category.description}</p>
              
              <Button
                variant="secondary"
                size="sm"
                className="mt-4 group-hover:bg-white group-hover:text-primary transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;