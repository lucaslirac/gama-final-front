import React from "react"
import * as C from './style';

const Footer = () => {
  return (
    <>
      <C.Container>
            <div>
              <p>Livraira Leitura</p>
            </div>
            <div>
                <span>Projeto desenvolvido por: </span>
                <a href='/'>Lucas</a>
                <a href='/'>Aline</a>
                <a href='/'>Mauricio</a>
                <a href='/'>Ravel</a>
               
            </div>
        </C.Container>
    </>
  )
}

export default Footer