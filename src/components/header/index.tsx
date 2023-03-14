import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/images/logo.png';
import LoginForm from '../LoginForm';
import Login from '../loginPageform/LoginPageForm';
import { Import, Pointer, ShoppingCart, User } from 'iconsax-react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import './style.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';





function Header() {
  const { auth } = useContext(AuthContext);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();




  return (

    <div className={"header-container bg-light"}>
      <div className="header-content">
        <h3 onClick={() => navigate("/")}>Livraria Gama</h3>
        <nav>
          <ul>
            <li onClick={() => navigate("/Products")}>Produtos</li>
            <li onClick={() => navigate("/About")}>About</li>
          </ul>
        </nav>
        <div className="cart">
          <BsBag size={22} color={"#000"} onClick={() => navigate("/Cart")} />
       
          <Button variant="outline-dark" onClick={() => navigate("/Register")}>Registrar</Button>
          <Button variant="outline-dark" onClick={() => navigate("/Login")}>Login</Button>
          {auth?.isAdmin && <Button variant="outline-dark" onClick={() => navigate("/Admin")}>Admin</Button>}
        </div>
      </div>
    </div>
  )
}


export default Header;