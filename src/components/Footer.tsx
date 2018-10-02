import * as React from "react";
import styled from "react-emotion";

import { colors } from "../styles/variables";

import Icon from "./Icon";
import Container from "./Container";

const Wrapper = styled.footer`
  padding-top: 2.187rem;
  padding-bottom: 1.187rem;
`;

const CompanyLogo = styled.div`
  float: left;
  width: 160px;
`;

const CompanyDesc = styled.div`
  margin-left: 160px;
`;

const Footer = () => (
  <Wrapper>
    <Container>
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
    </Container>
  </Wrapper>
);

export default Footer;
