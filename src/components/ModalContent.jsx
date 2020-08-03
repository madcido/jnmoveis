import React from "react";
import styled from "styled-components";
import { Row, Spacer } from "./Common";
import { Box } from "./Box";
import sob1 from "../assets/modal/sob1.jpg";
import sob2 from "../assets/modal/sob2.jpg";
import pronta1 from "../assets/modal/pronta1.jpeg";
import pronta2 from "../assets/modal/pronta2.jpeg";
import pronta4 from "../assets/modal/pronta4.jpeg";
import faca4 from "../assets/modal/faca4.png";

export const Modal1 = () => {
  return (
    <>
      <ModalHeader>Sob Medida</ModalHeader>
      <Box>
        <ModalBody>
          Transforme cada espaço da sua casa com elegância e sofisticação.
          Contamos com especialistas em projetos 3D para que você tenha a melhor
          visualização do seu sonho. Solte sua imaginação e traga seu projeto
          para a JN.
        </ModalBody>
      </Box>
      <Row>
        <Sob2 src={sob2} alt="sob medida 1" />
        <Spacer size={30} />
        <Sob1 src={sob1} alt="sob medida 2" />
      </Row>
    </>
  );
};

export const Modal2 = () => {
  return (
    <>
      <ModalHeader>Pronta Entrega</ModalHeader>
      <Box>
        <ModalBody>
          Tenha seu móvel pronto na hora que você mais precisa dele. Entre em
          contato conosco e veja o que podemos lhe oferecer. Atendemos toda a
          região de Gaspar e Blumenau.
        </ModalBody>
      </Box>
    </>
  );
};

export const Modal3 = () => {
  return (
    <>
      <ModalHeader>Faça-você-mesmo</ModalHeader>
      <Box>
        <ModalBody>
          Traga sua ideia e montamos o projeto em 3D com todas as medidas e os
          materiais necessários para você levar na sua loja de preferência e
          colocar a mão na massa. Atendemos todo o Brasil.
        </ModalBody>
      </Box>
    </>
  );
};

const ModalHeader = styled.p``;

const ModalBody = styled.p``;

const Sob2 = styled.img`
  width: 120px;
  height: 150px;
`;

const Sob1 = styled.img`
  width: 140px;
  height: 180px;
`;
