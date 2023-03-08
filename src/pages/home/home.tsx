import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";
import ProductList from "../../components/produtos/ProductList";
import { ProductsCarousel } from "../../components/ProductsCarousel";





function Home() {
    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <div>
                <div>
                    <Carrosel />
                </div>
            
      <ProductsCarousel>
        <>
          {productList.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <ProductList product_name={""} photo={""} category_id={0} {...item} />
            </div>
          ))}
        </>
      </ProductsCarousel>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Home