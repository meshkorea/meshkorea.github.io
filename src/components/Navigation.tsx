import styled from "react-emotion";
import { Link } from "gatsby";

import { clearfix } from "../styles/mixins";
import { colors } from "../styles/variables";

export const NavigationWrapper = styled.nav`
  ${clearfix} font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.gray80};
  border-top: 1px solid ${colors.gray40};
`;

export const NavigationLink = styled(Link)`
  display: block;
  float: ${(props: { prev: boolean }) => (props.prev ? "left" : "right")};
  padding: 5px 0;
  color: inherit;
  transition: color 0.5s;

  &:hover {
    color: ${colors.gray100};
  }
`;
