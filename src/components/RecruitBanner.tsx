import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as React from "react";
import { getEmSize } from "../styles/mixins";

import { breakpoints, colors } from "../styles/variables";

import Container from "./Container";
const heroSvg = require("./assets/recruit.png");
const heroLogoSvg = require("./assets/recruit-logo.svg");

const RecruitBanner = () => (
  <RecruitBannerWrapper>
    <RecruitWrapper>
      <Banner to="https://www.meshkorea.net/kr/career/">
        <RecruitText>
          <RecruitLogo src={heroLogoSvg} alt="MESH KOREA VROONG" />
          IT 물류의 중심이 될 당신
          <RecruitSigningBonusText>
            사이닝 보너스
            <strong>5000만원 지급!</strong>
          </RecruitSigningBonusText>
        </RecruitText>
        <RecruitList>
          <RecruitListItem>
            <RecruitListTitle>부문별 경력/신입</RecruitListTitle>
            <RecruitListDesc>2021. 04. 12 ~ 2021. 04. 30 까지</RecruitListDesc>
          </RecruitListItem>
          <RecruitListItem>
            <RecruitListTitle>문의</RecruitListTitle>
            <RecruitListDesc>
              <RecruitListMailLink href="mailto:recruit@meshkorea.net">
                recruit@meshkorea.net
              </RecruitListMailLink>
            </RecruitListDesc>
          </RecruitListItem>
        </RecruitList>
      </Banner>
    </RecruitWrapper>
  </RecruitBannerWrapper>
);

export default RecruitBanner;

const RecruitBannerWrapper = styled.div`
  margin: 0;
  height: 300px;
  color: ${colors.white};
  background: #00bc86;

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

  @media (max-width: ${getEmSize(breakpoints.xxxs)}em) {
    height: 360px;
  }
`;

const RecruitLogo = styled.img`
  float: right;
  margin-top: 10px;
  width: 190px;
  height: auto;
  color: #fff;

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: none;
  }
`;

const RecruitWrapper = styled(Container)`
  display: flex;
  height: 100%;
  background-image: url(${heroSvg});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 650px auto;

  /* portrait tablet */
  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    background-size: 560px auto;
  }

  /* landscape phone */
  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    background-size: min(150%, 560px) auto;
  }
`;

const RecruitText = styled.h2`
  flex: 1;
  margin: 0;
  padding: 50px 1em 0;
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

  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    padding-top: 40px;
  }
`;

const RecruitSigningBonusText = styled.div`
  margin-top: 0.6em;
  font-size: 1.25rem;

  > strong {
    display: block;
    margin-top: -0.2em;
    font-size: 2rem;
    font-weight: inherit;
    color: #fce124;
  }

  /* phone ~ portrait tablet */
  @media (min-width: ${getEmSize(
      breakpoints.xxs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    > strong {
      font-size: 1.5rem;
    }
  }

  /* portrait phones */
  @media (min-width: ${getEmSize(
      breakpoints.xxxs,
    )}em) and (max-width: ${getEmSize(breakpoints.xxs)}em) {
    > strong {
      font-size: 1.5rem;
    }
  }

  /* small phones */
  @media (max-width: ${getEmSize(breakpoints.xxxs)}em) {
    > strong {
      font-size: 1.25rem;
    }
  }
`;

const Banner = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
`;

const RecruitList = styled.dl`
  margin: 1rem 0 0;
  padding: 0;
`;

const RecruitListItem = styled.div`
  display: inline-block;
  margin-top: 1rem;
  margin-left: 2rem;

  /* phone ~ portrait tablet */
  @media (min-width: ${getEmSize(
      breakpoints.xxs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-left: 1.5rem;
  }

  /* portrait phones */
  @media (min-width: ${getEmSize(
      breakpoints.xxxs,
    )}em) and (max-width: ${getEmSize(breakpoints.xxs)}em) {
    margin-left: 0.6rem;
  }

  /* small phones */
  @media (max-width: ${getEmSize(breakpoints.xxxs)}em) {
    margin-left: 0.625rem;
  }
`;

const RecruitListTitle = styled.dt`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  line-height: 1.1;
`;

const RecruitListDesc = styled.dd`
  margin: 0;
  padding: 0;
`;

const RecruitListMailLink = styled.a`
  color: inherit;
`;
