import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCard from "../../components/Productcard";


function Products(){
    return(
        <div className="App">
            <header>
                <Header />
            </header>

            <div>
               <ProductCard />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Products