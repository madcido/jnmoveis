import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import { Row, Col, Spacer, Image } from "./Common";
import bridge1 from "../assets/bridge/bridge1.jpg";
import bridge2 from "../assets/bridge/bridge2.jpg";

export const Bridge = () => {
  return (
    <Container>
      <Image src={bridge1} style={{ flex: "1 0 50%" }} />
      <Spacer size={10} />
      <Col>
        <Row style={{ alignItems: "center", flex: "1" }}>
          <Row>
            <Box extraX="8px" extraY="4px">
              <p>
                Focados na criação e fabricação de móveis residenciais e
                comerciais, entregar 100% de satisfação. Afinal, sabemos que
                projetos são mais do que linhas em um papel, são os sonhos dos
                nossos clientes.
              </p>
            </Box>
          </Row>
        </Row>
        <Spacer size={10} />
        <Image src={bridge2} style={{ flex: "1 0 130px" }} />
      </Col>
    </Container>
  );
};

const Container = styled(Row)`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 2vw;
`;
