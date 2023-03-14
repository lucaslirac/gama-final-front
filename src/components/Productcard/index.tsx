import { Import, User } from 'iconsax-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import * as C from './index.style';
import { Product } from '../../types';
import got from "../../assets/got.jpg"


import ProductList from '../produtos/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useEffect, useState } from 'react';
import { getProductById } from '../../service/api';




type ProductProps = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

/**
 * createcart() => {
 *   _id: string,
 *   products: []
 * }
 * button -> updateOrder([product_id])
 */


function ProductCard(props: ProductProps) {

  const navigate = useNavigate();



  return (
    <C.Container>
      <Card className="container container-lg, container-sm, container-sm">
        <div className="card ">
          <img src={got} className="card-img-top d-flex" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Preço: R$: {props.price}</li>
          </ul>
          <div className="card-body links">
            <a href="#" className="card-link"onClick={() => navigate(`/ProductPage/${props._id}`)}>Ver Livro</a>
            <button className="card-link"onClick={() => navigate("/Cart")} >Adicionar ao Carrinho</button>
          </div>
        </div>
      </Card>
    </C.Container>





  );
}

export default ProductCard;