import * as React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import styled from "react-emotion";
import { graphql } from "gatsby";
import { Location } from "@reach/router";

import AuthorInfo, {
  AuthorAvatar as PostAuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Icon from "../components/Icon";
import Page from "../components/Page";
import PostHeading from "../components/PostHeading";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { fadeIn, articleStyle } from "../styles/mixins";
import { colors } from "../styles/variables";

interface SeeAlsoItem {
  icon: "APP_STORE" | "GITHUB" | "PLAY_STORE" | "WEB";
  uri: string;
  label: string;
}

const PostWrapper = styled.article`
  font-size: 1.25rem;
`;

interface ShareSheetProps {
  fixed: boolean;
}

const ShareSheet = styled.aside`
  position: ${(props: ShareSheetProps) => (props.fixed ? "fixed" : "absolute")};
  top: ${(props: ShareSheetProps) => (props.fixed ? "131px" : "auto")};
  right: 50%;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: right;
  color: ${colors.gray60};
  transform: translateX(490px);

  a,
  .SocialMediaShareButton {
    position: relative;
    display: block;
    margin-left: auto;
    margin-bottom: 0.625rem;
    width: 24px;
    color: ${colors.gray40};
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
      color: ${colors.gray60};
    }

    &:focus {
      outline: 0;
    }
  }

  a {
    &:hover::before {
      position: absolute;
      top: 0.5rem;
      right: 26px;
      width: 0;
      height: 0;
      content: attr(title);
      color: rgba(0, 0, 0, 0);
      overflow: hidden;
      border-left: 4px solid rgba(0, 0, 0, 0.5);
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
    }

    &:hover::after {
      position: absolute;
      top: 0.125rem;
      right: 30px;
      content: attr(title);
      padding: 0 10px;
      font-size: 1.167em;
      white-space: nowrap;
      color: #fff;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 61.25em) {
    display: none;
  }
`;

const ShareSheetTitles = styled.h5`
  margin: 1rem 0 5px;
  font-size: 1em;
  font-weight: inherit;

  &:first-of-type {
    margin-top: 0;
  }
`;

const TOCWrapper = styled.nav`
  position: ${(props: ShareSheetProps) => (props.fixed ? "fixed" : "absolute")};
  top: ${(props: ShareSheetProps) => (props.fixed ? "125px" : "auto")};
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
  ${articleStyle} padding: 0 70px;
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
      fields: {
        github?: string;
        playstore?: string;
        appstore?: string;
        link?: string;
        linkDesc?: string;
      };
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
            resize: {
              src: string;
            };
          };
        };
      };
    };
  };
}

interface PageTemplateState {
  shareSheetFixed: boolean;
  tocFixed: boolean;
}

class PageTemplate extends React.PureComponent<
  PageTemplateProps,
  PageTemplateState
> {
  public readonly state: PageTemplateState = {
    shareSheetFixed: false,
    tocFixed: false,
  };

  private offsets: number[] = [];

  public componentDidMount() {
    this.handleOnScroll();
    window.addEventListener("scroll", this.handleOnScroll);
    this.calculateOffsets();
    window.addEventListener("resize", this.calculateOffsets);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOnScroll);
    window.removeEventListener("resize", this.calculateOffsets);
  }

  public render() {
    const post = this.props.data.markdownRemark;
    const seeAlso = [
      post.fields.github
        ? {
            icon: "GITHUB",
            label: "GitHub 저장소 바로가기",
            uri: post.fields.github,
          }
        : undefined,
      post.fields.playstore
        ? {
            icon: "PLAY_STORE",
            label: "Play Store 바로가기",
            uri: post.fields.playstore,
          }
        : undefined,
      post.fields.appstore
        ? {
            icon: "APP_STORE",
            label: "App Store 바로가기",
            uri: post.fields.appstore,
          }
        : undefined,
      post.fields.link
        ? {
            icon: "WEB",
            label: post.fields.linkDesc || "관련 링크",
            uri: post.fields.link,
          }
        : undefined,
    ].filter(x => x) as SeeAlsoItem[];

    return (
      <IndexLayout>
        <Page>
          <PostHeading
            titleImage={post.frontmatter.titleImage.childImageSharp.resize.src}
            title={post.frontmatter.title}
            tags={post.frontmatter.tags}
          />
          <Container>
            <Location>
              {({ location }) => (
                <ShareSheet fixed={this.state.shareSheetFixed}>
                  <ShareSheetTitles>Share</ShareSheetTitles>
                  <FacebookShareButton url={location.href}>
                    <Icon name="FACEBOOK" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    title="Twitter로 공유"
                    url={location.href}
                  >
                    <Icon name="TWITTER" />
                  </TwitterShareButton>
                  {seeAlso.length ? (
                    <ShareSheetTitles>See also</ShareSheetTitles>
                  ) : null}
                  {seeAlso.map(x => (
                    <a
                      key={x.icon}
                      href={x!.uri}
                      target="_blank"
                      title={x.label}
                    >
                      <Icon name={x!.icon} />
                    </a>
                  ))}
                </ShareSheet>
              )}
            </Location>
            <PostAuthorInfo>
              <PostAuthorAvatar
                src={post.frontmatter.author.avatar.children[0].fixed.src}
              />
              <PostAuthorName>{post.frontmatter.author.name}</PostAuthorName>
              <PostAuthorDesc>{post.frontmatter.author.bio}</PostAuthorDesc>
              <PostDate>{post.frontmatter.date}</PostDate>
            </PostAuthorInfo>
            <PostWrapper id="article">
              <TOCWrapper fixed={this.state.tocFixed}>
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
    const calculateFloatingElements = () => {
      if (window.scrollY > 335 && !this.state.shareSheetFixed) {
        this.setState({ shareSheetFixed: true });
      } else if (window.scrollY < 335 && this.state.shareSheetFixed) {
        this.setState({ shareSheetFixed: false });
      }

      if (window.scrollY > 476 && !this.state.tocFixed) {
        this.setState({ tocFixed: true });
      } else if (window.scrollY < 476 && this.state.tocFixed) {
        this.setState({ tocFixed: false });
      }
    };

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        calculateFloatingElements();
      });
    } else {
      calculateFloatingElements();
    }
  };

  private calculateOffsets = () => {
    const articleContainer = document.getElementById("article")!;
    const wideElements = articleContainer.querySelectorAll(
      ".gatsby-resp-image-wrapper, .gatsby-resp-iframe-wrapper, .image-wrapper",
    );
    wideElements.forEach(x => {
      const element = x as HTMLElement;
      this.offsets.push(element.offsetTop);
      this.offsets.push(element.offsetTop + element.offsetHeight);
    });
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
      fields {
        github
        playstore
        appstore
        link
        linkDesc
      }
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
            resize(width: 1920) {
              src
            }
          }
        }
      }
    }
  }
`;
