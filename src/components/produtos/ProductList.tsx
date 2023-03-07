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
        <h1>{product.name}</h1>
        </>
      ))}
    </div>
  );
};

export default ProductList;
