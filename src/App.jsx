import React from "react";
import styled from "styled-components";
import * as data from "./data";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Bridge } from "./components/Bridge";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Box } from "./components/Box";
import { Spacer } from "./components/Common";

export const App = () => {
  return (
    <PageWrapper>
      <Header>
        <Slider width="100%" height="400px" slides={data.firstSlider} noDrive />
      </Header>
      <Spacer size={20} />
      <Bridge />
      <Spacer size={60} />
      <Section title="Nossos Produtos">
        <Slider
          width="100%"
          height="280px"
          slides={data.secondSlider}
          noSlide
        />
      </Section>
      <Spacer size={60} />
      <Section title="O que dizem sobre nós">
        <Box width="120%" extraX="60px" extraY="40px">
          <Slider
            width="260px"
            height="220px"
            slides={data.thirdSlider}
            arrowPosition="-100px"
          />
        </Box>
      </Section>
      <Spacer size={60} />
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;
