import { css, keyframes } from "react-emotion";

import { dimensions } from "./variables";

export const getEmSize = (size: number) => size / dimensions.fontSize.regular;

export const clearfix = css`
  &::before,
  &::after {
    content: "";
    display: table;
  }

  &::after {
    clear: both;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
