import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserList from "../../components/UserList/UserList";




function PageUserList() {
    const navigate = useNavigate();
    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div className="cta">
                <h1>Painel Usuarios</h1>
                <button onClick={() => navigate("/Admin")}>Voltar para admin</button>
                
                
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

export default PageUserList;