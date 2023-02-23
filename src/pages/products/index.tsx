import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";



function Products(){
    return(
        <div className="App">
            <header>
                <Header />
            </header>

            <div>
                <h1>Produtos</h1>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Products