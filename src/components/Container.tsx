import * as React from "react";
import styled from "react-emotion";

import { breakpoints, widths } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}rem;
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
