import { useContext } from 'react';
import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/home/home'
import About from '../pages/about'
import Register from '../pages/register'
import Login from '../pages/login'
import Products from '../pages/products'
import Carrinho from '../pages/cart'
import Admin from '../pages/admin'
import Check from '../pages/checkout'
import RegisterProdu from '../pages/RegisterProduct'
import { AuthContext } from '../context/AuthProvider/AuthProvider';


export default function Routes() {
    const { auth } = useContext(AuthContext);
    /**
     * Authorized
     * 
     * se Auth existe => Redirecionar para Home.
     * se Auth não existe => Redirecionar para Login.
     * 
     * how redirect auth react-router-dom
     */

    return(
        <BrowserRouter>
            <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Cart" element={<Carrinho/>} />
            {auth?.isAdmin && <Route path="/Admin" element={<Admin/>} /> }
            <Route path="/Check" element={<Check/>} />
            <Route path="/NewProduct" element={<RegisterProdu/>} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}