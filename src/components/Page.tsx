import * as React from "react";
import styled from "react-emotion";

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: 0;
  margin-bottom: 3rem;
`;

interface PageProps {
  className?: string;
}

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
