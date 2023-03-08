import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCard from "../../components/Productcard";
import ProductList from "../../components/produtos/ProductList";
import Carrosel from "../../components/carrosel";


function Products(){
    return(
        <div className="App">
            <header>
                <Header />
            </header>
            
            <h1>Produtos</h1>
            <div>
                <Carrosel />
               <ProductList />
            </div>
            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Products