import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/home/home'
import About from '../pages/about'
import Register from '../pages/register'
import Login from '../pages/login'
import Products from '../pages/products'
import Carrinho from '../pages/cart'



export default function Routes() {
    return(
        <BrowserRouter>
            <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Cart" element={<Carrinho/>} />

            </WrapperRoutes>
        </BrowserRouter>
    )
}