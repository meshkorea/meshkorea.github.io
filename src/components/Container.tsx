import * as React from "react";
import styled from "@emotion/styled";

import { breakpoints, widths } from "../styles/variables";
import { clearfix, getEmSize } from "../styles/mixins";

const StyledContainer = styled.div`
  ${clearfix};
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.xl)}rem;
  padding: 0 20px;

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

interface ContainerProps {
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
