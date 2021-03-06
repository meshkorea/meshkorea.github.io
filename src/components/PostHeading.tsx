import * as React from "react";
import styled from "@emotion/styled";

import Container from "../components/Container";
import { getEmSize } from "../styles/mixins";
import { colors, breakpoints } from "../styles/variables";
import { transformTags } from "../utils/tag";

interface PostHeadingProps {
  titleImage: string;
  title: string;
  tags?: string;
}

interface PostHeadingState {
  pageTop: number;
}

interface PostTitleProps {
  titleImage?: string;
}

interface PostTitleContainerProps {
  mobileFixed: boolean;
}

const Wrapper = styled.div`
  height: 360px;
  font-size: 1.125em;
  color: ${colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: ${colors.gray80};
  background-position: 50% 50%;
  background-size: cover;
  background-image: ${(props: PostTitleProps) =>
    props.titleImage ? `url(${props.titleImage})` : "none"};
`;

const PostTitleContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  height: 100%;
  padding: 0 90px 20px;

  > div span {
    margin-right: 0.4em;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: ${getEmSize(
      breakpoints.sm,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    ${(props: PostTitleContainerProps) =>
      props.mobileFixed
        ? `
    position: fixed;
    justify-content: center;
    top: 45px;
    left: 0;
    right: 0;
    z-index: 1000;
    height: 44px;
    padding: 0 16px 0 56px !important;
    color: ${colors.gray90};
    text-shadow: none;
    background: ${colors.gray5};

    > h1 {
      font-size: 1rem;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > div {
      display: none;
    }
    `
        : ""} padding-left: 56px;
    padding-right: 56px;
  }

  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.sm)}em) {
    padding-left: 56px;
    padding-right: 56px;
  }

  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  word-break: keep-all;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    font-size: 2rem;
  }
`;

class PostHeading extends React.PureComponent<
  PostHeadingProps,
  PostHeadingState
> {
  public readonly state: PostHeadingState = {
    pageTop: 0,
  };

  public componentDidMount() {
    this.handleOnScroll();
    window.addEventListener("scroll", this.handleOnScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOnScroll);
  }

  public render() {
    const { titleImage, title, tags } = this.props;
    return (
      <Wrapper
        titleImage={titleImage}
        style={{
          backgroundPosition: `50% ${50 -
            Math.max(this.state.pageTop, 0) / 20}%`,
        }}
      >
        <PostTitleContainer mobileFixed={this.state.pageTop > 414}>
          <PostTitle>{title}</PostTitle>
          <div>{transformTags(tags, true)}</div>
        </PostTitleContainer>
      </Wrapper>
    );
  }

  private handleOnScroll = () => {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        this.setState({ pageTop: window.scrollY });
      });
    } else {
      this.setState({ pageTop: window.scrollY });
    }
  };
}

export default PostHeading;
