import React from "react";
import styled from "styled-components";
import wood from "../assets/wood.png";
import logo from "../assets/logo.png";

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
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${wood});

  img {
    width: 85px;
    height: 85px;
    margin: 5px 0;
  }
`;
