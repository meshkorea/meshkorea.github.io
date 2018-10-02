import * as React from "react";
import styled from "react-emotion";

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: ${(props: LayoutMainProps) => (props.home ? "240px" : "115px")};
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
