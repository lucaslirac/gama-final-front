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
                <h1>Lista de usuarios</h1>
                <button onClick={() => navigate("/Products")}>Criar Produto</button>
                <button onClick={() => navigate("/Products")}>Lista de Produtos</button>
            </div>

            <div>
                <div>
                    <UserList />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Admin;