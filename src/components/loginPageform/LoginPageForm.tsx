import React from 'react';
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

function Login() {
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-4 text-center">Login</h2>


                            <MDBInput wrapperClass='mb-4 w-100' label='Email' id='email' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4 w-100' label='Senha' id='senha' type='password' size="lg" />

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Lembrar senha' />
                            <div>
                                <p>Nao tem conta? <a href="/Register">cadastrar</a></p>
                            </div>
                            <MDBBtn size='lg'>
                                Login
                            </MDBBtn>




                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login;