import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { MultiStepForm } from "../../components/MultistepForm/MultistepForm";


function Check() {
    
    return (
        <div className="App">

            <header>
                <Header />
            </header>


            <div>
                <div>
                    <MultiStepForm />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Check