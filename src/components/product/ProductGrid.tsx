import React from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProductCard 
            product={product} 
            onProductClick={onProductClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;