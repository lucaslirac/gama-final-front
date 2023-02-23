import React from 'react';

interface ProductItemProps {
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductItem;
