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

/**
 * createcart() => {
 *   _id: string,
 *   products: []
 * }
 * button -> updateOrder([product_id])
 */


function ProductCard(props: ProductProps) {

  //onClick={}
  /**
   * 
   * 0) atualizar productCard para ter o props._id
   * 
   * 1) localStorage se tem cart e cart._id
   * 
   * 2) cartId
   * 2.1) Se não tem cart, create cart
   * 
   * products: [_id: string]
   * 
   * handleOnClick = () => {}
   * 
   * tem carrinho?
   * 
   * não => async createOrder() => [product_id]. (OBS: Criar função de createOrder([product_id])).
   * 
   * tem carrinho?
   * 
   * sim. Você tem que ter um cart._id (OBS: Criar função de updateOrder(cartId, [product_id])).
   * onClick={() => handleOnclick(props._id)}
   */
  return (
    <C.Container>
      <Card className="container container-lg, container-sm, container-sm">
        <div className="card ">
          <img src={props.image} className="card-img-top d-flex" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Preço: R$: {props.price}</li>
          </ul>
          <div className="card-body links">
            <a href="#" className="card-link">Ver Livro</a>
            <button className="card-link" >Adicionar ao Carrinho</button>
          </div>
        </div>
      </Card>
    </C.Container>





  );
}

export default ProductCard;