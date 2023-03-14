import React, { useContext, useEffect, useState } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom'

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
import { getUserById, signIn } from '../../service/api';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { User } from '../../types';


interface EditLoginProps {
  id: string
}

function EditLogin() {
  const { id } = useParams();

  const [user, setUser] = useState<User>({} as User);
  console.log('id-----', id);

  const fetchUser = async (id: string) => {
    const userData = await getUserById(id)
    console.log(userData);
    setUser(userData.user);
  }

  useEffect(() => {
    if (id) fetchUser(id);
  }, [id])



  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [role, setRole] = useState(user.role);

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

  const UpdateUser = async () => {
    const response = await getUserById({ name, email, password, role });
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
          <h2 className="text-uppercase text-center mb-5">Editar Usuario</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Novo Nome"
            size="lg"
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Novo Email"
            size="lg"
            id="email"
            type="email"
            value={email}

            onChange={handleEmailChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Nova Senha"
            size="lg"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Nova funcao"
            size="lg"
            id="Role"
            type="text"
            value={role}
            onChange={handleRoleChange}
          />

          <MDBBtn
            className="mb-4 w-100 gradient-custom-4"
            size="lg"
            onClick={async () => {
              await UpdateUser();



            }}
          >

            Editar
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default EditLogin;