import React from "react";
import styled from "styled-components";

export const Box = ({ width, height, extraX, extraY, children, className }) => {
  return (
    <BoxContainer className={className}>
      <LateralBorder width={width} extraY={extraY} />
      <BottomBorder height={height} extraX={extraX} />
      {children}
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  position: relative;
`;

const LateralBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ width }) => width ?? "100%"};
  height: ${({ extraY }) => `calc(100% + ${extraY ?? "0px"})`};
  transform: translate(-50%, -50%);
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  opacity: 0.3;
`;

const BottomBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ extraX }) => `calc(100% + ${extraX ?? "0px"})`};
  height: ${({ height }) => height ?? "100%"};
  transform: translate(-50%, -50%);
  border-bottom: 1px solid #fff;
  opacity: 0.3;
`;
