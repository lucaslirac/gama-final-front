import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCard from "../../components/Productcard";
import ProductList from "../../components/produtos/ProductList";


function Products(){
    return(
        <div className="App">
            <header>
                <Header />
            </header>
            <h1>Produtos</h1>
            <div>
               <ProductList />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Products