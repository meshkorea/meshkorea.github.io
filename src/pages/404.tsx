import * as React from "react";
import styled from "@emotion/styled";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Icon from "../components/Icon";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { breakpoints, colors } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

const notfound = require("../components/assets/notfound.svg");

const NotFoundImage = styled.img`
  float: right;
  display: block;
  margin-top: 20px;
  width: 194px;
  height: 130px;

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    float: none;
    margin-left: auto;
  }
`;

const NotFoundPage = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

const NotFoundContainer = styled(Container)`
  width: 100%;
`;

const NotFoundTitle = styled.h1`
  font-size: 6em;
  line-height: 1.1875;
  margin-bottom: 0.375rem;
`;

const NotFoundDesc = styled.p`
  margin-bottom: 6.25rem;
  font-size: 2.25em;
  color: ${colors.gray60};

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    margin-bottom: 3rem;
  }
`;

const NotFoundGuideTitle = styled.dt`
  margin-top: 1.875rem;
  font-size: 1.25em;

  > i {
    color: ${colors.gray60};
  }
`;

const NotFoundGuideDesc = styled.dd`
  margin-top: 0.5rem;
  margin-left: 34px;
  margin-bottom: 0;

  a:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => (
  <IndexLayout>
    <NotFoundPage>
      <NotFoundContainer>
        <NotFoundImage src={notfound} />
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundDesc>마음이 어렵네요.</NotFoundDesc>
        <NotFoundGuideTitle>
          <Icon width={34} name="LINK" />
          링크를 눌러서 들어오셨나요?
        </NotFoundGuideTitle>
        <NotFoundGuideDesc>
          죄송합니다. 삭제된 글이거나 오류가 발생한 것 같습니다.
        </NotFoundGuideDesc>
        <NotFoundGuideTitle>
          <Icon width={34} name="ADDRESS" />
          직접 주소를 입력하셨나요?
        </NotFoundGuideTitle>
        <NotFoundGuideDesc>
          짝짝짝, 직업적으로 올바른 자세입니다! 지금 이 상쾌한 기분으로&nbsp;
          <strong>
            <OutboundLink
              href="https://www.wanted.co.kr/company/676"
              target="_blank"
            >
              지금 지원하러 가기
            </OutboundLink>
          </strong>
          &nbsp;버튼을 눌러보시는 게 어떨까요?
        </NotFoundGuideDesc>
      </NotFoundContainer>
    </NotFoundPage>
  </IndexLayout>
);

export default NotFound;
