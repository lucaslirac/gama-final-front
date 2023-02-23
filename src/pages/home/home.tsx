import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";





function Home() {
    return (
        <div className="App">

            <header>
                <Header />
            </header>

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