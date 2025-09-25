import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add with default size and color for quick add
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-[1.02] animate-fade-in"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <Badge 
              variant="destructive" 
              className="absolute top-3 left-3 bg-discount text-white"
            >
              -{product.discount}%
            </Badge>
          )}
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-8 w-8 bg-white/80 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          {/* Quick Add Button */}
          <Button
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-rating text-rating" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviewCount} reviews)
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;