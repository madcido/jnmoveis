import React from "react";
import styled from "styled-components";
import chevron from "../assets/chevron.png";

export const ModalSlide = ({ image, title, subtitle, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container
      image={image}
      style={{
        borderRadius: "4px",
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <FloatingBox>
        <p>{title}</p>
        <p>{subtitle}</p>
        <OpenButton onClick={() => setIsOpen(true)}>Saiba mais</OpenButton>
      </FloatingBox>
      {isOpen ? (
        <>
          <Overlay onClick={() => setIsOpen(false)} />
          <Modal>
            <CloseButton onClick={() => setIsOpen(false)} />
            {content}
          </Modal>
        </>
      ) : null}
    </Container>
  );
};

export const TextSlide = styled.div`
  width: 100%100px;
  height: 100%;
  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CoveredSlide = ({ image }) => {
  return (
    <Container
      image={image}
      style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, 0.7)" }}
    >
      <Cover>Um novo conceito em móveis planejados</Cover>
    </Container>
  );
};

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 100px 30px;
  font-size: 30px;
  line-height: 48px;
  font-weight: 400;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center center;
`;

const OpenButton = styled.p`
  cursor: pointer;
  border-bottom: 1px solid #fff;
`;

const FloatingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 4px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  height: 90vh;
  max-height: 600px;
  border-radius: 4px;
  background-color: #696969;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
`;

const CloseButton = ({ onClick }) => {
  return (
    <CloseButtonContainer onClick={onClick}>
      <ChevronRight />
      <ChevronLeft />
    </CloseButtonContainer>
  );
};

const CloseButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ChevronRight = styled.img.attrs({ src: chevron, alt: "" })`
  width: 16px;
  filter: invert(1);
  transform: rotate(-90deg);
  position: relative;
  left: 4px;
`;

const ChevronLeft = styled.img.attrs({ src: chevron, alt: "" })`
  width: 16px;
  filter: invert(1);
  transform: rotate(90deg);
  position: relative;
  right: 4px;
`;
