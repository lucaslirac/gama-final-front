import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RegisterProduct from "../../components/NewProductForm";
import { useNavigate } from "react-router-dom";


function RegisterProdu(){
    const navigate = useNavigate();
    return(
        <div className="App">
        <Header/>
       <div>
        <div className="cta">
        <h1>Criar Produto</h1>
                <button onClick={() => navigate("/Admin")}>Voltar para admin</button>
        </div>
        <div>
            <RegisterProduct />
        </div>
       </div>
        <Footer />
      </div>
    )
}


export default RegisterProdu