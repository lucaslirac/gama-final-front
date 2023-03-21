import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { getProductById } from "../../service/api";
import { Product } from "../../types";
import "./style.css";

function ProductPage() {

  const navigate = useNavigate();


  
    const { id } = useParams();
  
    const [product, setProdocut] = useState<Product>({} as Product);
  
  
    const fetchProduct = async (id: string) => {
      const ProductData = await getProductById(id)
      console.log(ProductData);
      setProdocut(ProductData.product);
    }
  
    useEffect(() => {
      if (id) fetchProduct(id);
    }, [id])








  return (

    
    <div className="App">

    <header>
        <Header />
    </header>

        
      <div className="details">
        <div className="details-image"></div>

        <div className="description">
          <h1 className="title">{product.name}</h1>
          <p className="price">R$:{product.price}</p>
          <p className="text">{product.description}</p>

          <div className="actions">
            <div className="product-amount">
              <p>&#45;</p>
              <p>1</p>
              <p>&#43;</p>
            </div>
            
          </div>
          <div className="buttons">
            <button className="cart-button" onClick={() => navigate("/Cart")}>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
   
    <footer>
        <Footer />
    </footer>

</div>
   
    
  )
}

export default ProductPage;