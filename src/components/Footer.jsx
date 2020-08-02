import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import { Row, Col, Image, Spacer } from "./Common";
import contato from "../assets/contato.png";

export const Footer = () => {
  return (
    <Container>
      <Col>
        <Row>
          <Image src={contato} style={{ flex: "1 0 160px" }} />
          <Spacer size={10} />
          <Row style={{ flex: "1" }}>
            <FlexBox extraX="150px" extraY="15px" height="105%">
              <Col>
                <p>Gaspar - Santa Catarina</p>
                <Spacer size={10} />
                <p style={{ padding: "0 5px" }}>
                  Email
                  <br />
                  marcenariamdfjn@gmail.com
                </p>
                <Spacer size={10} />
                <p>
                  Telefone
                  <br />
                  (47) 99615 4001
                </p>
                <Spacer size={10} />
                <p>Redes Sociais</p>
                <Row style={{ justifyContent: "center" }}>
                  <Icon />
                  <Icon />
                  <Icon />
                </Row>
              </Col>
            </FlexBox>
          </Row>
        </Row>
        <Spacer size={10} />
        <p style={{ margin: "8px 0 16px" }}>
          Todos os direitos reservados © JN Marcenaria 2020
        </p>
      </Col>
    </Container>
  );
};

const Container = styled(Row)`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  overflow: hidden;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  margin: 5px 10px;
  background-color: #000;
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`;
