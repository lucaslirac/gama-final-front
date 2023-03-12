import React from "react"
import * as C from './style';

const Footer = () => {
  return (
    <>
      <C.Container>
            <div>
              <p>Livraria Gama</p>
            </div>
            <div>
                <span>Projeto desenvolvido por: </span>
                <a href='https://www.linkedin.com/in/lucas-coutinho-686377138/' target="_blank">Lucas</a>
                <a href='https://github.com/alinegiselegi' target="_blank">Aline</a>
                <a href='https://www.linkedin.com/in/mauricio-vieira-do-nascimento' target="_blank">Mauricio</a>
                <a href='https://www.linkedin.com/in/ravel-cardoso-3bb3331a0/' target="_blank">Ravel</a>
               
            </div>
        </C.Container>
    </>
  )
}

export default Footer