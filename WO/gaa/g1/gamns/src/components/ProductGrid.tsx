import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';
import './ProductGrid.css';

const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
