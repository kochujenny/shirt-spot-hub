import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Truck, RotateCcw, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart(product, selectedSize, selectedColor);
    onClose();
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
          <DialogDescription className="sr-only">
            Product details for {product.name}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.discount && (
                <Badge 
                  variant="destructive" 
                  className="absolute top-4 left-4 bg-discount text-white"
                >
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="h-5 w-5 fill-rating text-rating" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-price">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            {/* Size Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Color Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button variant="outline" className="w-full" size="lg">
                <Heart className="h-5 w-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 gap-3 pt-4 border-t">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>30-day easy returns</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Quality guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;