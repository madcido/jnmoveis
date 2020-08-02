import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import { Col, Spacer } from "./Common";

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Box width="110%" height="120%" extraX="40px" extraY="40px">
        <H2>{title}</H2>
      </Box>
      <Spacer size={60} />
      {children}
    </Container>
  );
};

const Container = styled(Col)`
  align-items: center;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 2vw;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
`;
