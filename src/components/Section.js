import React from "react";
import downarrow from "../down-arrow.svg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useGlobalContext } from "../context";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  const { style, closeBurger } = useGlobalContext();
  return (
    <Wrap bgImage={backgroundImg} className={style} onClick={closeBurger}>
      <Fade bottom>
        <AnimationOnScroll
          animateIn="animate__shakeY"
          animateOut="animate__bounceOutRight"
        >
          <div className="item-text">
            <h1>{title}</h1>
            <p>
              {description}
              <a href="https://www.tesla.com/">touchless delivery</a>
            </p>
          </div>
        </AnimationOnScroll>
      </Fade>
      <div className="button-container">
        <Fade bottom>
          <div className="button-group">
            <button className="btn left-btn">{leftBtnText}</button>
            {rightBtnText && (
              <button className="btn right-btn">{rightBtnText}</button>
            )}
          </div>
        </Fade>
        <img src={downarrow} alt="down" className="down-btn" />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("./images/model-s.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
  a {
    text-decoration: underline;
    text-transform: Capitalize;
  }
`;
