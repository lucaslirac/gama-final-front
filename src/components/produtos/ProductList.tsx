import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
