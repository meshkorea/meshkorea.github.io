import * as React from "react";
import styled from "react-emotion";

import { breakpoints } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: ${(props: LayoutMainProps) => (props.home ? "215px" : "90px")};

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    padding-top: 97px;
  }
`;

interface LayoutMainProps {
  className?: string;
  home?: boolean;
}

const LayoutMain: React.SFC<LayoutMainProps> = ({
  children,
  className,
  home,
}) => (
  <StyledLayoutMain home={home} className={className}>
    {children}
  </StyledLayoutMain>
);

export default LayoutMain;
