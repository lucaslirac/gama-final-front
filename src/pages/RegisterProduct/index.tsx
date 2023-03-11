import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RegisterProduct from "../../components/NewProductForm";


function RegisterProdu(){
    return(
        <div className="App">
        <Header/>
       <div>
        <div>
            <RegisterProduct />
        </div>
       </div>
        <Footer />
      </div>
    )
}


export default RegisterProdu