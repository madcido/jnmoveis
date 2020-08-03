import React from "react";
import styled from "styled-components";
import chevron from "../assets/chevron.png";

export const Slider = ({
  width = "100%",
  height = "100px",
  slides = ["eeeta pora", "mas q blz"],
  autoSlide = true,
  arrowPosition,
}) => {
  React.useEffect(() => {
    if (autoSlide) {
      const id = setInterval(nextSlide, 8000);
      return () => clearInterval(id);
    }
  });

  React.useEffect(() => {
    const currentSlide = slideRef.current;
    currentSlide.addEventListener("touchstart", register);
    currentSlide.addEventListener("touchend", calculate);
    return () => {
      currentSlide.removeEventListener("touchstart", register);
      currentSlide.removeEventListener("touchend", calculate);
    };
  });

  const slideRef = React.useRef();

  const [slide, setSlide] = React.useState(0);

  const nextSlide = () => {
    if (slide === slides.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    if (slide === 0) {
      setSlide(slides.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const [touchPos, setTouchPos] = React.useState(0);

  const register = (e) => {
    setTouchPos(e.touches[0].pageX);
  };

  const calculate = (e) => {
    const deltaX = e.changedTouches[0].pageX - touchPos;

    if (deltaX < 0) {
      nextSlide();
    }

    if (deltaX > 0) {
      previousSlide();
    }
  };

  return (
    <SliderContainer width={width} height={height}>
      <SliderContent ref={slideRef}>{slides[slide]}</SliderContent>
      <PreviousButton onClick={previousSlide} position={arrowPosition} />
      <NextButton onClick={nextSlide} position={arrowPosition} />
      <Bullets total={slides.length} current={slide} />
    </SliderContainer>
  );
};

const Bullets = ({ total, current }) => {
  const bullets = [];
  for (let i = 0; i < total; i++) {
    bullets.push(<Bullet key={i} active={i === current} />);
  }

  return <BulletContainer>{bullets}</BulletContainer>;
};

const SliderContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderContent = styled.div`
  width: 100%;
  height: 100%;
`;

const Chevron = styled.img.attrs({ src: chevron, alt: "chevron" })`
  width: 24px;
  filter: invert(0.6);
  ${(props) => {
    switch (props.direction) {
      case "left":
        return "transform: rotate(90deg);";
      case "right":
        return "transform: rotate(-90deg);";
      default:
        return "";
    }
  }}
`;

const Button = styled.div`
  display: none;
  @media (min-width: 787px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const PreviousButton = styled(Button).attrs({
  children: <Chevron direction="left" />,
})`
  left: ${(props) => props.position ?? "30px"};
`;

const NextButton = styled(Button).attrs({
  children: <Chevron direction="right" />,
})`
  right: ${(props) => props.position ?? "30px"};
`;

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  margin: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#000" : "#7f7f82")};
`;

const BulletContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;
