import * as React from "react";
import styled from "react-emotion";
import { graphql } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { colors } from "../styles/variables";
import { render } from "react-dom";

interface PostTitleProps {
  titleImage?: string;
}

const PostHeading = styled.div`
  height: 360px;
  font-size: 1.125em;
  color: ${colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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
`;

const PostWrapper = styled.div`
  font-size: 1.25rem;

  > div {
    position: relative;
    padding: 0 70px;

    > * {
      margin: 1.5em 0;
    }

    .image-wrapper {
      margin-left: -70px;
      margin-right: -70px;
      text-align: center;

      > * {
        max-width: 940px;
      }
    }

    .image-caption {
      margin-top: 0.75em;
      font-size: 0.833em;
      text-align: center;
      color: ${colors.gray80};
    }

    > p {
      line-height: 1.56;
    }

    pre,
    code,
    kbd,
    samp {
      padding: 0.125em 0.3125em;
      white-space: pre-wrap;
      font-size: 0.889rem;
      background: ${colors.gray5};
      border-radius: 3px;
    }

    pre {
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    pre code {
      background: none;
      padding: 0;
    }
  }
`;

const PostTitle = styled.h1`
  margin: 0;
  word-break: keep-all;
`;

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        tags?: string;
        title: string;
        titleImage: {
          childImageSharp: {
            original: {
              src: string;
            };
          };
        };
      };
    };
  };
}

interface PageTemplateState {
  pageTop: number;
}

class PageTemplate extends React.PureComponent<
  PageTemplateProps,
  PageTemplateState
> {
  public readonly state: PageTemplateState = {
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
    const { data } = this.props;
    const tags = (data.markdownRemark.frontmatter.tags || "")
      .split(",")
      .map(x => x.trim());

    return (
      <IndexLayout>
        <Page>
          <PostHeading
            titleImage={
              data.markdownRemark.frontmatter.titleImage.childImageSharp
                .original.src
            }
          >
            <PostTitleContainer>
              <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
              <div>{tags.map(x => `#${x}`)}</div>
            </PostTitleContainer>
          </PostHeading>
          <Container>
            <PostWrapper>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </PostWrapper>
          </Container>
        </Page>
      </IndexLayout>
    );
  }

  private handleOnScroll = () => {
    this.setState({ pageTop: window.scrollY });
  };
}

export default PageTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        titleImage {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;
