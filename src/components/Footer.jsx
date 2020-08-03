import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import { Row, Col, Image, Spacer } from "./Common";
import contato from "../assets/contato.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

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
                  <Icon href="http://www.facebook.com">
                    <img src={facebook} alt="facebook icon" />
                  </Icon>
                  <Icon href="http://www.instagram.com">
                    <img src={instagram} alt="instagram icon" />
                  </Icon>
                  <Icon href="http://www.google.com">
                    <img src={whatsapp} alt="whatsapp icon" />
                  </Icon>
                </Row>
              </Col>
            </FlexBox>
          </Row>
        </Row>
        <Spacer size={10} />
        <p
          style={{
            margin: "8px 24px 16px",
            textAlign: "right",
            fontWeight: 100,
          }}
        >
          Desenvolvido por <Fabio />
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

const Icon = styled.a.attrs({ target: "_blank" })`
  display: block;
  margin: 5px;
  text-decoration: none;
  img {
    width: 40px;
  }
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const Fabio = styled.a.attrs({
  href: "http://fabiocarmo.me",
  target: "_blank",
  children: "Fabio Carmo ©2020",
})`
  color: inherit;
  font-weight: 300;
  text-decoration: none;
  border-bottom: 0 solid transparent;
  transition: border-bottom 0.8s ease;
  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  }
`;
