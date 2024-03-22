import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  width: 56px;
  height: 56px;
  
  @media (min-width: 1025px) {
    width: 35px;
    height: 35px;
  }
`;

const LeftArrowIcon = ({ disabled }: { disabled: boolean }) => (
  <StyledSVG viewBox="0 0 56 56">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="55.5"
        y="55.5"
        width="55"
        height="55"
        rx="27.5"
        transform="rotate(180 55.5 55.5)"
        stroke={disabled ? "#4A5357" : "#FDFCFC"}
        style={{ stroke: disabled ? "#4A5357" : "#FDFCFC", strokeOpacity: 1 }}
      />
      <path
        d="M26.878 39.3333L16.3335 28.3333L26.879 17.3333L32.8633 17.3333L24.3997 26.1337L38.3335 26.1337V30.5337L24.3997 30.5337L32.8624 39.3333H26.878Z"
        fill={disabled ? "#4A5357" : "#FDFCFC"}
        style={{ fill: disabled ? "#4A5357" : "#FDFCFC", fillOpacity: 1 }}
      />
    </svg>
  </StyledSVG>
);

export default LeftArrowIcon;
