import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";
import ProductList from "../../components/produtos/ProductList";
import { ProductsCarousel } from "../../components/ProductsCarousel";
import { useNavigate } from "react-router-dom";
import "./style.css";





function Home() {
    const navigate = useNavigate();
    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div className="cta">
                <h1>Melhores livros pra voce</h1>
                <p>Compre os melhores livros dos melhores autores do mundo</p>
                <button onClick={() => navigate("/Products")}>Comprar</button>
            </div>

            <div>
                <div>
                    <Carrosel />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Home