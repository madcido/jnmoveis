import React from "react";
import styled from "styled-components";
import wood from "../assets/header/wood.jpg";
import logo from "../assets/header/logo.jpeg";

export const Header = ({ children }) => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
      </Container>
      {children}
    </>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${wood});
  background-size: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  img {
    width: 85px;
    height: 85px;
    margin: 5px 0;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
