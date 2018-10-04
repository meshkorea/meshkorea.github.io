import * as React from "react";
import { navigate } from "gatsby";

type Tags = string | undefined;

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

export const transformTags = (tags: Tags = "", withLink?: boolean) =>
  withLink
    ? tags.split(",").map(x => <TagLink key={x} tagName={x.trim()} />)
    : tags
        .split(",")
        .map(x => `#${x.trim()}`)
        .join(" ");
