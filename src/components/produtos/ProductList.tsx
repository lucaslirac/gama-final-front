import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';
import { getproductList } from '../../service/api';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// interface ProductListProps {
//   products: Product[];
// }

const ProductList: React.FC = () => {

  const [productList, setProductList] = useState<any[]>([])

useEffect(() => {
  const fetchProductList = async () => {
    const allProducts = await getproductList()
    setProductList(allProducts.products)
  }
  fetchProductList()
}, [])

console.log(productList)

  return (
    <div>
      {productList.map(product => (
        <>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        </>
      ))}
    </div>
  );
};

export default ProductList;
