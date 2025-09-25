import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/hero/HeroSection';
import CategorySection from '@/components/sections/CategorySection';
import SaleSection from '@/components/sections/SaleSection';
import ProductFilters from '@/components/filters/ProductFilters';
import ProductGrid from '@/components/product/ProductGrid';
import ProductModal from '@/components/product/ProductModal';
import CartDrawer from '@/components/cart/CartDrawer';
import { products } from '@/data/products';
import { Product } from '@/types';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(products.map(p => p.category))];
    return cats.sort();
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].reverse();
        break;
      default: // featured
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const handleShopNow = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCollection = () => {
    const categorySection = document.getElementById('categories');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopSale = () => {
    // Filter to show only discounted items
    setSelectedCategory('All');
    setSortBy('featured');
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <HeroSection onShopNow={handleShopNow} onViewCollection={handleViewCollection} />
        
        <CategorySection onCategorySelect={handleCategorySelect} />
        
        <SaleSection onShopSale={handleShopSale} />
        
        <section id="products" className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Our T-Shirt Collection</h2>
            <p className="text-muted-foreground">
              Discover premium quality t-shirts for every occasion and style preference.
            </p>
          </div>
          
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalProducts={filteredProducts.length}
          />
          
          <ProductGrid
            products={filteredProducts}
            onProductClick={setSelectedProduct}
          />
        </section>
      </main>
      
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default Index;
