import React from "react";
import downarrow from "../down-arrow.svg";
import styled from 'styled-components'

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg} className="wrap">
      <div className="item-text">
        <h1>{title}</h1>
        <p> {description}</p>
      </div>

      <div className="button-container">
        <div className="button-group">
          <button className="btn left-btn">{leftBtnText}</button>
          {rightBtnText && (
            <button className="btn right-btn">{rightBtnText}</button>
          )}
        </div>
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
  background-image: ${props => `url("./images/${props.bgImage}")`}
`;