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
import { ChangeUser, getUserById, signIn } from '../../service/api';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { IAuth, User } from '../../types';


interface EditLoginProps {
  id: string
}

export type Userform = {

  name: string;
  email: string;
  role: string;
}


function EditLogin() {
  const { id } = useParams();

  const { auth } = useContext(AuthContext);

  const [user, setUser] = useState<Userform>({} as Userform);


  const fetchUser = async (id: string) => {
    const userData = await getUserById(id)
    console.log(userData);
    setUser(userData.user);
  }

  useEffect(() => {
    if (id) fetchUser(id);
  }, [id])





  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  }, [user]);

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

  const navigate = useNavigate();


  const UpdateUser = async (id: string, token: string, user: Userform) => {
    const { error } = await ChangeUser(id, token, user);

    if (!error) {

      navigate('/UserList');
    }
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
              await UpdateUser(id as string, auth.token, { name, email, role });



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

function setAuth(auth: any) {
  throw new Error('Function not implemented.');
}
