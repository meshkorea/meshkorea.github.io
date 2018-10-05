import * as React from "react";
import styled from "react-emotion";

import Container from "../components/Container";
import { colors } from "../styles/variables";
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
  padding: 0 70px 20px;

  > div span {
    margin-right: 0.4em;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.5s;

    &:hover {
      opacity: 1;
    }
  }
`;

const PostTitle = styled.h1`
  margin: 0;
  word-break: keep-all;
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
        <PostTitleContainer>
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
