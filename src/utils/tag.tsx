import * as React from "react";
import { navigate } from "gatsby";

interface TagLinkProps {
  tagName: string;
}

class TagLink extends React.PureComponent<TagLinkProps> {
  public render() {
    return <span onClick={this.handleOnClick}>#{this.props.tagName}</span>;
  }

  private handleOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/tags/${this.props.tagName}`);
  };
}

export const transformTags = (tags: string[] | undefined, withLink?: boolean) =>
  withLink && tags
    ? tags.map(x => <TagLink key={x} tagName={x.trim()} />)
    : tags.map(x => `#${x.trim()}`).join(" ");
