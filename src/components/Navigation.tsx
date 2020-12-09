import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { clearfix } from "../styles/mixins";
import { colors } from "../styles/variables";

export const NavigationWrapper = styled.nav`
  ${clearfix} font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.gray80};
  border-top: 1px solid ${colors.gray40};
`;

const NavigationLinkWrapper = styled.span`
  a {
    display: block;
    float: ${(props: { prev?: boolean }) => (props.prev ? "left" : "right")};
    padding: 5px 0;
    color: inherit;
    transition: color 0.5s;
    &:hover {
      color: ${colors.gray100};
    }
  }
`;

interface NavigationLinkProps extends React.HTMLProps<HTMLSpanElement> {
  prev?: boolean;
  to: string;
}

export const NavigationLink = ({ prev, to, children }: NavigationLinkProps) => (
  <NavigationLinkWrapper prev={prev}>
    <Link to={to}>{children}</Link>
  </NavigationLinkWrapper>
);
