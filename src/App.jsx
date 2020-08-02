import React from "react";
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
    <>
      <Header>
        <Slider width="100%" height="400px" slides={data.firstSlider} withBox>
          <p>Um novo conceito em móveis planejados</p>
        </Slider>
      </Header>
      <Bridge />
      <Spacer size={60} />
      <Section title="Nossos Produtos">
        <Slider
          width="100%"
          height="280px"
          slides={data.secondSlider}
          autoSlide={false}
        />
      </Section>
      <Spacer size={60} />
      <Section title="O que dizem sobre nós">
        <Box width="120%" extraX="60px" extraY="40px">
          <Slider width="260px" height="220px" slides={data.thirdSlider} />
        </Box>
      </Section>
      <Spacer size={60} />
      <Footer />
    </>
  );
};
