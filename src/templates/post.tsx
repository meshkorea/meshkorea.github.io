import * as React from "react";
import styled from "react-emotion";
import { graphql } from "gatsby";

import AuthorInfo, {
  AuthorAvatar as PostAuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Icon from "../components/Icon";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { fadeIn } from "../styles/mixins";
import { colors } from "../styles/variables";

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

const PostWrapper = styled.article`
  font-size: 1.25rem;
`;

const PostTitle = styled.h1`
  margin: 0;
  word-break: keep-all;
`;

const TOCWrapper = styled.nav`
  position: absolute;
  margin-top: 0.15em;
  width: 30px;
  line-height: 1.5rem;
  color: ${colors.gray40};
  transition: color 0.5s;

  &:hover {
    color: ${colors.gray80};
  }
`;

const TOC = styled.div`
  position: absolute;
  top: -0.75em;
  left: 30px;
  z-index: 50;
  font-size: 1rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-image: none;

    p {
      margin: 0;
    }

    a {
      display: block;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      padding: 0.3rem 0.5rem;
      border-radius: 0.5rem;
      transition: background-color 0.5s;

      &:hover {
        background-color: ${colors.gray10};
      }
    }

    &:not(:first-child) {
      padding-left: 1rem;
    }
  }

  > ul {
    width: 240px;
    max-height: 360px;
    overflow-y: auto;
    padding: 0.5rem 1rem;
    display: none;
    background: ${colors.white};
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }

  li {
  }

  nav:hover & ul,
  nav &:hover ul {
    display: block;
    animation: ${fadeIn} 0.5s;
  }
`;

const Article = styled.article`
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

  a:hover,
  a:active {
    text-decoration: underline;
  }
`;

const PostAuthorInfo = styled(AuthorInfo)`
  margin-top: 40px;
`;
const PostAuthorName = styled(AuthorName)`
  margin-top: 2px;
  margin-left: 70px;
  font-size: 1.125rem;
`;
const PostAuthorDesc = styled(AuthorDesc)`
  margin-left: 70px;
`;

const PostDate = styled(PostAuthorDesc)`
  margin-top: 18px;
  margin-bottom: 1.5rem;
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
      tableOfContents: string;
      frontmatter: {
        author: {
          id: string;
          name: string;
          bio: string;
          avatar: {
            children: Array<{
              fixed: {
                src: string;
              };
            }>;
          };
        };
        authorDesc: string;
        date: string;
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
    const post = this.props.data.markdownRemark;
    const tags = (post.frontmatter.tags || "").split(",").map(x => x.trim());

    return (
      <IndexLayout>
        <Page>
          <PostHeading
            titleImage={
              post.frontmatter.titleImage.childImageSharp.original.src
            }
          >
            <PostTitleContainer>
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <div>{tags.map(x => `#${x}`)}</div>
            </PostTitleContainer>
          </PostHeading>
          <Container>
            <PostAuthorInfo>
              <PostAuthorAvatar
                src={post.frontmatter.author.avatar.children[0].fixed.src}
              />
              <PostAuthorName>{post.frontmatter.author.name}</PostAuthorName>
              <PostAuthorDesc>{post.frontmatter.author.bio}</PostAuthorDesc>
              <PostDate>{post.frontmatter.date}</PostDate>
            </PostAuthorInfo>
            <PostWrapper>
              <TOCWrapper>
                <Icon name="TOC" />
                <TOC
                  dangerouslySetInnerHTML={{
                    __html: post.tableOfContents,
                  }}
                />
              </TOCWrapper>
              <Article dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents
      frontmatter {
        author {
          id
          name
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 96, height: 96, quality: 85) {
                  src
                }
              }
            }
          }
        }
        date
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
