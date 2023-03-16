import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;

  .parte2 {
    padding-top: 50px;
  }

  .imageBook {
    max-width: 90px;
  }

  .botao-excluir {
    font-size: 15px;
  }

  .total {
    margin-top: 30px;
    font-weight: bold;
  }

  .btn-cart {
    padding: 8px 32px;
    outline: none;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  .resumo-pedido {
    padding: 50px;
  }

  p {
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;

    .resumo-pedido {
      padding: 20px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;

    .btn-cart {
      font-size: 12px;
    }
  }
`;