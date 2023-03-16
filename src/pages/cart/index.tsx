import Header from '../../components/header';
import Footer from '../../components/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import * as C from './carrinho.style';


import ProductList from '../../components/produtos/ProductList';

export default function Carrinho() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <C.Container>
          <Row>

            <Col sm={7}>
              <h2>Meu Carrinho</h2>
              <h6>Confira os itens selecionados em seu carrinho de compras:</h6>

              <>
               
                  <ListGroup  horizontal className="my-2 mt-3">

                    <ListGroup.Item>
                      <img src='' alt="livro" className='imageBook' />
                    </ListGroup.Item>


                    <ListGroup.Item>
                      <div className="nomeLivro">
                          <h5>The witcher</h5>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h6>R$:55,99</h6>

                    </ListGroup.Item>


                    <ListGroup.Item><Button variant="light">Excluir</Button></ListGroup.Item>

                  </ListGroup>
             
              </>
            </Col>


            <Col sm={5} className="resumo-pedido">
              <h5>Pedido</h5>


              <Row>
                <Col xs={12} md={8}>
                  Subtotal
                </Col>
                <Col xs={6} md={4}>
                R$:55,99
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={8}>
                  Envio
                </Col>

              </Row>

              <div className="total">
                <Row>
                  <Col xs={12} md={8}>
                    Total
                  </Col>
                  <Col xs={6} md={4}>
                  R$:55,99
                  </Col>
                </Row>
              </div>
              <br />
              <Col xs={6} md={4}>
                <button className='btn-cart' onClick={() => navigate("/Check")}>Comprar</button>
              </Col>
            </Col>
          </Row>
        </C.Container>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>

  );
};