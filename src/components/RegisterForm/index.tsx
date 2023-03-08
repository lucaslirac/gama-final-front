import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
  import { createUser } from '../../service/api'
import './style.css'

function RegisterForm() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image mt-5'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Criar conta</h2>
          <MDBInput wrapperClass='mb-4' label='Nome' size='lg' id='Name' type='text' />
          <MDBInput wrapperClass='mb-4' label='Sobrenome' size='lg' id='LastName' type='text' />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='email' type='email' />
          <MDBInput wrapperClass='mb-4' label='Senha' size='lg' id='password' type='password' />
          <MDBInput wrapperClass='mb-4' label='Repita a senha' size='lg' id='Repetpassword' type='password' />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Concordo com os termos de contrato' />
          </div>
          <div>
            <p>Ja tem conta?  <a href="/Login">Logar</a></p>
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Registrar</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterForm;