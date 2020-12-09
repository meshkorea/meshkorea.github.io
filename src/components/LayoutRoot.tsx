import * as React from "react";
import styled from "@emotion/styled";

import { colors } from "../styles/variables";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${colors.white};
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
);

export default LayoutRoot;
