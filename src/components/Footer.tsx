import * as React from "react";
import styled from "react-emotion";

import { breakpoints, colors } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

import Icon from "./Icon";
import Container from "./Container";

const Wrapper = styled.footer`
  padding-bottom: 1.187rem;
`;

const FooterContainer = styled(Container)`
  border-top: 1px solid ${colors.gray15};
  padding-top: 2.187rem;
`;

const CompanyLogo = styled.div`
  float: left;
  width: 160px;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    float: none;
    width: auto;
  }
`;

const CompanyDesc = styled.div`
  margin-left: 160px;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-left: 0;
    margin-top: 1.5rem;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    font-size: 0.875rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <FooterContainer>
      <CompanyLogo>
        <Icon name="LOGO" width={133} height={24} color={colors.primary100} />
      </CompanyLogo>
      <CompanyDesc>
        <p>
          프리미엄 배달대행 부릉을 운영하는 메쉬코리아는 투명하고 유연하게
          라이더를 연결하는 물류플랫폼을 지향합니다.
          <br />
          물류플랫폼을 함께 만들어갈 능력있는 사람들과 함께할 사람들을 찾습니다.
        </p>
        <p>
          <a href="https://www.wanted.co.kr/company/676" target="_blank">
            지금 지원하러 가기&nbsp;
            <Icon width={16} height={16} name="CARET_RIGHT" />
          </a>
        </p>
      </CompanyDesc>
    </FooterContainer>
  </Wrapper>
);

export default Footer;
