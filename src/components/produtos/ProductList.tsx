import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';
import { getproductList } from '../../service/api';
import ProductCard from '../Productcard';

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




  return (
    <div> 
      {productList.map(product => (
        <>
          <ProductCard {...product} />
        </>
      ))}
    </div>
  );
};

export default ProductList;
