import * as React from "react";
import styled from "react-emotion";

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 240px;
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
