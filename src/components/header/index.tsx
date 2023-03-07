import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/images/logo.png';
import LoginForm from '../LoginForm';
import { Import, ShoppingCart, User } from 'iconsax-react';

import './style.css'





function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container fluid className='container'>
        <Navbar.Brand href="/" className='logo' >Livraria Leitura</Navbar.Brand >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Products">Produto</Nav.Link>
            <Nav.Link href="/About" >
              Sobre nos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button href='/Register' variant="primary me-3" id='register'>Registrar</Button>
        <Nav.Link href="#" className='cart me-3'><ShoppingCart size="25" color="#000000" /></Nav.Link>
        <Nav.Link href="#" className='perfil me-3'><User size="25" color="#000000" onClick={handleShow} /></Nav.Link>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body> <LoginForm/> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Entrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  )
}


export default Header;