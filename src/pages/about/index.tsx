import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './style.css'


function About() {
    return (
        <div className="App">
            <Header />
            <div>
                <div className="group">
                    <h2>Grupo 7 </h2>
                </div>
                <div className="subgrou">
                    <h3>Lucas</h3>
                    <h3>Aline</h3>
                    <h3>Mauricio</h3>
                    <h3>Ravel</h3>
                </div>
                <div className="subtext">
                    <p>Desafio Final do Gama Experience Edição 46.</p>

                    <p>O objetivo é desenvolver uma aplicação Ecommerce do zero colocar utilizando todas as habilidades adquiridas durante a jornada, criando uma API do zero utilizando Node.js, Express, TypeScript e MongoDb.</p>

                    <ul>
                        <li>Analisar e organizar o desenvolvimento de uma aplicação complexa do zero.</li>
                        <li>Desenvolver aplicações com Node.js e Express utilizando padrões de arquiteturas de acordo com a necessidade do projeto.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About