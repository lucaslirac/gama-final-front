import { User } from 'iconsax-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ProductList from '../produtos/ProductList';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
            
        </Card.Title>
        <Card.Text>
          <ProductList />
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;