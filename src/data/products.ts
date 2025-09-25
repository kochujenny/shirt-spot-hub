import { Product } from '@/types';
import tshirt1 from '@/assets/tshirt-1.jpg';
import tshirt2 from '@/assets/tshirt-2.jpg';
import tshirt3 from '@/assets/tshirt-3.jpg';
import tshirt4 from '@/assets/tshirt-4.jpg';
import tshirt5 from '@/assets/tshirt-5.jpg';
import tshirt6 from '@/assets/tshirt-6.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt Collection',
    price: 29.99,
    originalPrice: 39.99,
    image: tshirt1,
    rating: 4.5,
    reviewCount: 128,
    category: 'Basic Tees',
    description: 'Ultra-soft 100% cotton t-shirt collection in multiple colors. Perfect for everyday wear with excellent durability and comfort.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    discount: 25
  },
  {
    id: '2',
    name: 'Classic Black Cotton Tee',
    price: 24.99,
    image: tshirt2,
    rating: 4.7,
    reviewCount: 85,
    category: 'Basic Tees',
    description: 'Essential black t-shirt made from premium cotton. Timeless design that works with any outfit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black']
  },
  {
    id: '3',
    name: 'Oversized Graphic Tee',
    price: 34.99,
    originalPrice: 44.99,
    image: tshirt3,
    rating: 4.3,
    reviewCount: 67,
    category: 'Graphic Tees',
    description: 'Modern oversized fit with minimalist graphic design. Made from soft cotton blend for maximum comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    discount: 22
  },
  {
    id: '4',
    name: 'Navy Blue Polo Shirt',
    price: 39.99,
    image: tshirt4,
    rating: 4.6,
    reviewCount: 92,
    category: 'Polo Shirts',
    description: 'Premium polo shirt in classic navy blue. Perfect for both casual and semi-formal occasions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Black']
  },
  {
    id: '5',
    name: 'Heather Gray Crew Neck',
    price: 27.99,
    image: tshirt5,
    rating: 4.4,
    reviewCount: 156,
    category: 'Basic Tees',
    description: 'Soft heather gray t-shirt with crew neck design. Made from cotton-polyester blend for comfort and durability.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Heather Gray', 'Heather Blue', 'Heather Green']
  },
  {
    id: '6',
    name: 'Vintage Style Red Tee',
    price: 32.99,
    originalPrice: 42.99,
    image: tshirt6,
    rating: 4.2,
    reviewCount: 73,
    category: 'Vintage',
    description: 'Retro-inspired red t-shirt with vintage graphics. Premium cotton construction with a worn-in feel.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Burgundy', 'Orange'],
    discount: 23
  }
];