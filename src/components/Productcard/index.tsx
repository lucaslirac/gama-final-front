import { User } from 'iconsax-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ProductList from '../produtos/ProductList';

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
}

function ProductCard(props:ProductProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
  );
}

export default ProductCard;