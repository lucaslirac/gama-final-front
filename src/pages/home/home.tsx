import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";
import ProductList from "../../components/produtos/ProductList";





function Home() {
    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div>
                <div>
                    <Carrosel />
                </div>
                <ProductList />
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Home