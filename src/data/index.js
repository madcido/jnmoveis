import React from "react";
import { CoveredSlide, ModalSlide, TextSlide } from "../components/SlideBase";
import { Modal1, Modal2, Modal3 } from "../components/ModalContent";
import slide11 from "../assets/slides/slide11.jpg";
import slide12 from "../assets/slides/slide12.jpg";
import slide13 from "../assets/slides/slide13.jpg";
import slide14 from "../assets/slides/slide14.jpeg";
import slide15 from "../assets/slides/slide15.jpg";
import slide21 from "../assets/slides/slide21.png";
import slide22 from "../assets/slides/slide22.jpg";
import slide23 from "../assets/slides/slide23.jpg";

export const firstSlider = [
  <CoveredSlide image={slide11} />,
  <CoveredSlide image={slide12} />,
  <CoveredSlide image={slide13} />,
  <CoveredSlide image={slide14} />,
  <CoveredSlide image={slide15} />,
];

export const secondSlider = [
  <ModalSlide
    image={slide21}
    title="Sob Medida"
    subtitle="Peças totalmente personalizadas"
    content={<Modal1 />}
  />,
  <ModalSlide
    image={slide22}
    title="Pronta Entrega"
    subtitle="Consulte nosso catálogo"
    content={<Modal2 />}
  />,
  <ModalSlide
    image={slide23}
    title="Faça-você-mesmo"
    subtitle="Comece ainda hoje um novo projeto"
    content={<Modal3 />}
  />,
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
