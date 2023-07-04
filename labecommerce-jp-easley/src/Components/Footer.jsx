import React from "react";
import styled from "styled-components";

// PERSONALIZAR O FOOTER*
const FooterContainer = styled.footer`
  background-color: #0a0424;
  color: white;
  padding: 2rem;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} Meu Site Ecommerce Espacial. Todos os
        direitos reservados.
        <br /> João Pedro de Melo Martins - EASLEY
      </p>
    </FooterContainer>
  );
};

export default Footer;
