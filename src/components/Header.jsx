import styled from "styled-components";
import wood from "../assets/wood/woodG.png";

export const Header = styled.div`
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
