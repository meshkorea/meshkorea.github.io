import { css, keyframes } from "react-emotion";

import { colors, dimensions } from "./variables";

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

export const resetUl = css`
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-image: none;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const articleStyle = css`
  > * {
    margin: 1.5em 0;
  }

  .image-wrapper {
    margin-left: -70px;
    margin-right: -70px;
    text-align: center;

    > * {
      max-width: 940px;
    }
  }

  .image-caption {
    margin-top: 0.75em;
    font-size: 0.833em;
    text-align: center;
    color: ${colors.gray80};
  }

  > p {
    line-height: 1.56;
  }

  pre,
  code,
  kbd,
  samp {
    padding: 0.125em 0.3125em;
    white-space: pre-wrap;
    font-size: 0.889rem;
    background: ${colors.gray5};
    border-radius: 3px;
  }

  pre {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  pre code {
    background: none;
    padding: 0;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }
`;
