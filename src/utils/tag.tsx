import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

interface TagLinkProps {
  tagName: string;
}

const TagLink: React.FC<TagLinkProps> = ({ tagName }) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
    },
    [],
  );

  return (
    <StyledLink to={`/tags/${tagName}`} onClick={handleClick}>
      #{tagName}
    </StyledLink>
  );
};

export const transformTags = (
  tags: string[] | undefined = [],
  withLink?: boolean,
) =>
  withLink && tags
    ? tags.map(x => <TagLink key={x} tagName={x.trim()} />)
    : tags.map(x => `#${x.trim()}`).join(" ");

const StyledLink = styled(Link)`
  display: inline-block;
  word-break: break-all;
  color: inherit;
  transition: text-shadow 0.3s;

  &:not(:last-of-type) {
    margin-right: 0.5em;
  }
`;
