import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCard from "../../components/Productcard";
import ProductList from "../../components/produtos/ProductList";
import Carrosel from "../../components/carrosel";
import { TextalignCenter } from "iconsax-react";

import './style.css'

function Products() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>


            <div>
                <Carrosel />
                <div>
                    <h1 className="h1">Produtos</h1>
                </div>
                <ProductList />
            </div>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Products