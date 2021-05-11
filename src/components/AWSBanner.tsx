import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as React from "react";
import { getEmSize } from "../styles/mixins";

import { breakpoints, colors } from "../styles/variables";

import Container from "./Container";
const awsBg = require("./assets/aws.jpg");
const awsLogo = require("./assets/aws_logo.png");

const AWSBanner = () => (
  <AWSBannerWrapper>
    <HeroItemWrapper>
      <AWSText>
        국내 최대규모의 IT 컨퍼런스
        <br />
        <strong>
          <NoBreakWrapper>AWS Summit Online</NoBreakWrapper>
          <NoBreakWrapper>Korea 2021</NoBreakWrapper>
        </strong>
        <br />
        <em>
          <NoBreakWrapper>메쉬코리아가</NoBreakWrapper>
          <NoBreakWrapper>브론즈 스폰서로 함께 합니다.</NoBreakWrapper>
        </em>
        <LogoAndButton>
          <AWSButton to="https://forms.gle/Ndj8Adxs7jtuc7KL7">
            경품 받으러 가기
          </AWSButton>
          <LogoImage
            width={289}
            height={33}
            src={awsLogo}
            alt="MESH KOREA x AWS Summit Online"
          />
        </LogoAndButton>
      </AWSText>
    </HeroItemWrapper>
  </AWSBannerWrapper>
);

export default AWSBanner;

const AWSBannerWrapper = styled.div`
  margin: 0;
  height: 300px;
  color: ${colors.white};
  background: #010137 50% 0 url(${awsBg});
  background-size: cover;

  /* portrait phone */
  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.sm)}em) {
    height: 400px;
  }

  /* portrait phone */
  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    height: 400px;
  }

  @media (max-width: ${getEmSize(breakpoints.xxxs)}em) {
    height: 360px;
  }
`;

const HeroItemWrapper = styled(Container)`
  display: flex;
  height: 100%;
  padding-top: 50px;
`;

const AWSText = styled.h2`
  flex: 1;
  margin: 0;
  padding: 0 1em;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  word-break: break-word;

  strong {
    font-size: 1.8em;
    font-weight: 700;
  }

  em {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    font-size: 1.2em;
  }

  /* phone ~ portrait tablet */
  @media (min-width: ${getEmSize(
      breakpoints.xxs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    font-size: 1.25rem;
  }

  /* portrait phones */
  @media (min-width: ${getEmSize(
      breakpoints.xxxs,
    )}em) and (max-width: ${getEmSize(breakpoints.xxs)}em) {
    padding: 0 0.4em;
    font-size: 1.125rem;
  }

  /* small phones */
  @media (max-width: ${getEmSize(breakpoints.xxxs)}em) {
    padding: 0 0.5em;
    font-size: 1rem;
  }
`;

const LogoAndButton = styled.div`
  margin-top: 1em;

  /* portrait phone */
  @media (min-width: ${getEmSize(breakpoints.sm)}em) {
    margin-top: 0.2em;
  }
`;

const LogoImage = styled.img`
  margin-top: 0.8em;

  /* portrait phone */
  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: block;
    margin-top: 2em;
  }
`;

const AWSButton = styled(Link)`
  float: right;
  height: 2.375rem;
  margin-top: 0.75em;
  padding: 0 20px 0 30px;
  font-size: 0.875rem;
  line-height: 2.375rem;
  font-weight: 700;
  color: #e24fcb;
  background: ${colors.white};
  border-radius: 2rem;

  &::after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-left: 10px;
    vertical-align: 0.1em;
    border-top: 1px solid #e24fcb;
    border-right: 1px solid #e24fcb;
    transform: rotate(45deg);
  }

  /* portrait phone */
  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    float: none;
    display: inline-block;
  }
`;

const NoBreakWrapper = styled.span`
  display: inline-block;
  white-space: nowrap;
  margin-right: 0.2em;

  & + & {
    margin-right: 0;
  }
`;
