import React from "react";
import { Slide, ModalSlide, TextSlide } from "../components/Slide";
import slide11 from "../assets/slide1-1.png";
import slide21 from "../assets/slide2-1.png";

export const firstSlider = [
  <Slide image={slide11} />,
  "mim dá mais um",
  "q beleeeza",
];

export const secondSlider = [
  <ModalSlide
    image={slide21}
    title="Sob Medida"
    subtitle="Peças totalmente personalizadas"
    content="blablabla dentro do modal"
  />,
  "mim dá mais um",
  "q beleeeza",
];

export const thirdSlider = [
  <TextSlide>
    <p>
      Móveis com um ótimo acabamento, material de ótima qualidade, atendimento e
      pós venda nota 10!!
    </p>
  </TextSlide>,
  <TextSlide>
    <p>
      Mesmo pelo prazo curto e complexidade do nosso projeto, tudo foi feito com
      muita agilidade e profissionalismo. Sem dúvida indicaria os seus serviços.
    </p>
  </TextSlide>,
  <TextSlide>
    <p>
      Altamente qualificado e responsável, sendo o ponto maior o atendimento e a
      preocupação em fazer algo que realmente o cliente goste. Recomendadíssimo!
    </p>
  </TextSlide>,
];
