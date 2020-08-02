import React from "react";
import styled from "styled-components";

export const Slider = ({
  width = "100%",
  height = "100px",
  slides = ["eeeta pora", "mas q blz"],
}) => {
  React.useEffect(() => {
    const id = setInterval(nextSlide, 8000);
    return () => clearInterval(id);
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
      <PreviousButton onClick={previousSlide} />
      <NextButton onClick={nextSlide} />
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

const Button = styled.div`
  display: none;
  @media (min-width: 787px) {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: green;
    cursor: pointer;
  }
`;

const PreviousButton = styled(Button)`
  left: 30px;
`;

const NextButton = styled(Button)`
  right: 30px;
`;

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  margin: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#545456" : "#7f7f82")};
`;

const BulletContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;
