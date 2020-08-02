import React from "react";
import styled from "styled-components";

export const ModalSlide = ({ title, subtitle, content, image }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Slide image={image}>
      <Box>
        <p>{title}</p>
        <p>{subtitle}</p>
        <OpenButton onClick={() => setIsOpen(true)}>Saiba mais</OpenButton>
      </Box>
      {isOpen ? (
        <>
          <Overlay onClick={() => setIsOpen(false)} />
          <Modal>
            <CloseButton onClick={() => setIsOpen(false)} />
            {content}
          </Modal>
        </>
      ) : null}
    </Slide>
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

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center center;
`;

const OpenButton = styled.p`
  cursor: pointer;
  border-bottom: 1px solid transparent;
  &:hover {
    border-color: #fff;
  }
`;

const Box = styled.div`
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
  background-color: #232;
  box-shadow: 0 4px 20px #111;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background-color: green;
`;
