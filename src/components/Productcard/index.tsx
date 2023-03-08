import { Import, User } from 'iconsax-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';


import ProductList from '../produtos/ProductList';
import './style.css'



type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function ProductCard(props: ProductProps) {
  return (
    <body>
      <Card style={{ width: '20rem'}} className="card" id='card'>
        <Card.Text>
        {props.image}
          </Card.Text>
          
        
        <Card.Body>
          <Card.Title>
            {props.name}
          </Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </body>
      

  
  );
}

export default ProductCard;