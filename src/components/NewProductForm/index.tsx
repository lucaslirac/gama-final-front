import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Api, createProduct } from "../../service/api";


function RegisterProduct() {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState(0);
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("6405f1a023d99232913d717d");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setdescription(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setprice(parseInt(event.target.value));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setimage(event.target.value);
  };

  const handlecategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcategory(event.target.value);
  };

  const registerProduct = async () => {
    const response = await createProduct({ name, description, price, image, category });
    //Api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
    console.log(name, description, price, image, category)
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image mt-5"
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Formulario</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Nome do Produto"
            size="lg"
            id="Name"
            type="text"
            onChange={handleNameChange}
          />
          <MDBTextArea
            wrapperClass="mb-4"
            label="Descricao"
            size="lg"
            id="description"

            onChange={handleDescriptionChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Preco"
            size="lg"
            id="price"
            type="number"
            onChange={handlePriceChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="image"
            size="lg"
            id="image"
            type="text"
            onChange={handleImageChange}
          />
          {/*<MDBInput
            wrapperClass="mb-4"
            label="categoria"
            size="lg"
            id="category"
            type="text"
            onChange={handlecategoryChange}
          />*/}
          <MDBBtn
            className="mb-4 w-100 gradient-custom-4"
            size="lg"
            onClick={async () => {
              await registerProduct();
            }}
          >
            Registrar Produto
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterProduct;