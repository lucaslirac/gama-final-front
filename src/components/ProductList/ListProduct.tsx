import React, { useState, useEffect } from 'react';
import ListProduct from '.';
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

const PProductList: React.FC = () => {

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
          <ListProduct {...product} />
        </>
      ))}
    </div>
  );
};

export default PProductList;
