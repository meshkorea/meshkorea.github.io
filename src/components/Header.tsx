import * as React from "react";
import styled from "react-emotion";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { heights, dimensions, colors } from "../styles/variables";
import Container from "./Container";

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${colors.gray100};
  border-bottom: 1px solid ${colors.gray15};
  background-color: ${colors.gray10};
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: inherit;
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
