import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as React from "react";
import { getEmSize } from "../styles/mixins";

import { breakpoints, colors } from "../styles/variables";

import Container from "./Container";
const heroSvg = require("./assets/hero.svg");

const Hero = () => (
  <HeroWrapper>
    <HeroItemWrapper>
      <HeroText>
        IT와 물류가 촘촘하게 연결된 세상,
        <br />
        부릉 테크에서 함께 만들어가요
        <br />
        <HeroButton to="https://www.meshkorea.net/kr/career/">
          진행중인 채용
        </HeroButton>
      </HeroText>
    </HeroItemWrapper>
  </HeroWrapper>
);

export default Hero;

const HeroWrapper = styled.div`
  margin: 0;
  height: 300px;
  color: ${colors.white};
  background: ${colors.bi};

  @media (min-width: ${getEmSize(
      breakpoints.lg,
    )}em) and (max-width: ${getEmSize(breakpoints.xl)}em) {
    height: 240px;
  }

  /* portrait phone */
  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.sm)}em) {
    height: 340px;
  }

  /* portrait phone */
  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    height: 400px;
  }
`;

const HeroItemWrapper = styled(Container)`
  display: flex;
  height: 100%;
  padding-top: 50px;
  background-image: url(${heroSvg});
  background-repeat: no-repeat;
  background-position: right 40px bottom 25px;
  background-size: 400px auto;

  /* landscape tablet */
  @media (min-width: ${getEmSize(
      breakpoints.md,
    )}em) and (max-width: ${getEmSize(breakpoints.xl)}em) {
    background-size: 380px auto;
    background-position: right 40px center;
  }

  /* portrait tablet */
  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    padding-top: 30px;
    background-size: 380px auto;
    background-position: right 35px bottom 15px;
  }

  /* landscape phone */
  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    padding-top: 40px;
    background-size: min(90%, 320px) auto;
    background-position: right 50% bottom 25px;
  }
`;

const HeroText = styled.h2`
  flex: 1;
  margin: 0;
  padding: 0 1em;
  font-size: 2rem;
  line-height: 1.25;
  word-break: keep-all;

  /* phone ~ portrait tablet */
  @media (min-width: ${getEmSize(
      breakpoints.xxs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    font-size: 1.5rem;
  }

  /* portrait phones */
  @media (min-width: ${getEmSize(
      breakpoints.xxxs,
    )}em) and (max-width: ${getEmSize(breakpoints.xxs)}em) {
    padding: 0 0.4em;
    font-size: 1.5rem;
  }

  /* small phones */
  @media (max-width: ${getEmSize(breakpoints.xxxs)}em) {
    padding: 0 0.5em;
    font-size: 1.25rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  height: 2.375rem;
  margin-top: 0.75em;
  padding: 0 20px 0 30px;
  font-size: 0.875rem;
  line-height: 2.375rem;
  color: ${colors.bi};
  background: ${colors.white};
  border-radius: 2rem;

  &::after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-left: 10px;
    vertical-align: 0.15em;
    border-top: 1px solid ${colors.bi};
    border-right: 1px solid ${colors.bi};
    transform: rotate(45deg);
  }
`;
