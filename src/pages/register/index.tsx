import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RegisterForm from "../../components/RegisterForm";


function Register() {
    return (
        <div className="App">
            <Header />
            <div>
                <div>
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Register