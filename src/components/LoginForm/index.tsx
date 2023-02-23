import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function LoginForm(){
    return(
        <div className="d-flex align-items-center justify-content-center">
                <div className="login rounded">
            
            <h2 className="mb-3">Login</h2>
            <form className="needs-validation">
            <div className="form-group was-validated mb-2">
                <label htmlFor="email" className="form-label">Endereço de email</label>
                <input type="email" className="form-control " required/>
                <div className="invalid-feedback">
                    Coloque seu email
                </div>
            </div>
            <div className="form-group was-validated mb-2">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control m" required/>
                <div className="invalid-feedback">
                    Coloque sua senha
                </div>
            </div>
            <div className="form-group  form-check mb-2">
                <input type="checkbox" className="form-check-input"/>
                <label htmlFor="check" className="form-check-label">Manter conectado</label>
            </div>
            <div>
                <p>Nao tem conta? <a href="/Register">cadastrar</a></p>
            </div>
            </form>
        </div>
        </div>
    
    )
}

export default LoginForm