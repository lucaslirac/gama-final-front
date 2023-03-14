import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

import ProductList from "../../components/produtos/ProductList";
import PProductList from "../../components/ProductList/ListProduct";
import UserList from "../../components/UserList/UserList";
import { deleteProduct } from "../../service/api";




function PageProductList() {




    const navigate = useNavigate();
    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div className="cta">
                <h1>Painel de Produtos</h1>
                <button onClick={() => navigate("/Admin")}>Voltar para admin</button>


            </div>

            <div>
                <div>
                    <PProductList />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default PageProductList;