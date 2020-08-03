import React from "react";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Spacer = styled.div`
  min-width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;
`;

export const Image = ({ src, style }) => {
  return (
    <ImageContainer style={style}>
      <img src={src} alt="" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
