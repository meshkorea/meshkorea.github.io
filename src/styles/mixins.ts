import { css, keyframes } from "@emotion/react";

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
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
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
  }

  .image-caption {
    margin-top: 0.75em;
    font-size: 0.833em;
    text-align: center;
    color: ${colors.gray80};
  }

  > p {
    line-height: 1.75;
  }

  li > p,
  li > ul {
    margin-bottom: 0;
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

  p > code,
  li > code {
    vertical-align: 1px;
    word-break: break-word;
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

  a.anchor {
    margin-left: -1.5rem;
    padding-right: 0.5rem;
    line-height: 1.1;
    color: ${colors.gray60};

    > svg {
      fill: ${colors.gray60};
    }
  }
`;
