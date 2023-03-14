import Footer from "../../components/footer";
import Header from "../../components/header";
import ListUser from "../../components/UserList";
import UserList from "../../components/UserList/UserList";
import { useNavigate } from "react-router-dom";




function Admin() {
    const navigate = useNavigate();
    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div className="cta">
                <h1>Painel Admin</h1>
                <button onClick={() => navigate("/NewProduct")}>Criar Produto</button>
                <button onClick={() => navigate("/UserList")}>Lista de Usuarios</button>
                <button onClick={() => navigate("/ProductList")}>Lista de Produtos</button>
            </div>


            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Admin;