import { Import, User } from 'iconsax-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import * as C from './index.style';


import ProductList from '../produtos/ProductList';




type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function ProductCard(props: ProductProps) {
  return (
    <C.Container>
    <Card className="container container-lg, container-sm, container-sm">
     
      <div className="card ">
      <img src={props.image} className="card-img-top d-flex" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Preço: R$: {props.price}</li>
      </ul>
      <div className="card-body links">
        <a href="#" className="card-link">Ver Livro</a>
        <a href="#" className="card-link">Adicionar ao Carrinho</a>
      </div>
    </div>
    
  </Card>
  </C.Container>
     
  
      

  
  );
}

export default ProductCard;