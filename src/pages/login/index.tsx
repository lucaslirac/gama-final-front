import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from "../../components/loginPageform/LoginPageForm";


function Register(){
    return(
        <div className="App">
        <Header/>
       <div>
        <div>
            <Login />
        </div>
       </div>
        <Footer />
      </div>
    )
}


export default Register