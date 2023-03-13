import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";
import ProductList from "../../components/produtos/ProductList";
import { ProductsCarousel } from "../../components/ProductsCarousel";
import { useNavigate } from "react-router-dom";
import EditLogin from "../../components/EditUserForm/indext";
import { getUserById } from "../../service/api";
import { User } from '../../types';


const id = window.location.search.split('?')[1];

function EditUser() {
    const navigate = useNavigate();

    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div className="cta">
             
                <button onClick={() => navigate("/UserList")}>Voltar para lista de usuarios</button>
            </div>

            <div>
                <div>
                    <EditLogin id={id} />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default EditUser