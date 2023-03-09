import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { signIn } from '../../service/api';



function LeginrForm() {
   
}

function Login() {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
 
  
    const HandleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
  
    const loginUser = async () => {
      const response = await signIn({  email, password });
     //Api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
    };

    return (
        <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image mt-5"
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Login</h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="email"
              type="email"
              onChange={HandleEmailChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Senha"
              size="lg"
              id="password"
              type="password"
              onChange={handlePasswordChange}
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Concordo com os termos de contrato"
              />
            </div>
            <div>
              <p>
                Não tem conta ? <a href="/Login">Registrar</a>
              </p>
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              onClick={async () => {
                await loginUser();
              }}
            >
              Logar
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
            }

export default Login;