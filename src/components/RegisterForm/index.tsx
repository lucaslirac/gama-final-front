import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Api, createUser } from "../../service/api";
import "./style.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  const registerUser = async () => {
    const response = await createUser({ name, email, password, role });
   //Api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
   console.log(name, email, password, role)
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image mt-5"
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Criar conta</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Nome"
            size="lg"
            id="Name"
            type="text"
            onChange={handleNameChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="lg"
            id="email"
            type="email"
            onChange={handleEmailChange}
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
              Ja tem conta? <a href="/Login">Logar</a>
            </p>
          </div>
          <MDBBtn
            className="mb-4 w-100 gradient-custom-4"
            size="lg"
            onClick={async () => {
              await registerUser();
            }}
          >
            Registrar
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterForm;