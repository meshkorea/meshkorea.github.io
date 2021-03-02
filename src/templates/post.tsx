import * as React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Location } from "@reach/router";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import AuthorInfo, {
  AuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Icon from "../components/Icon";
import Page from "../components/Page";
import TOC from "../components/TOC";
import PostHeading from "../components/PostHeading";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { getEmSize, articleStyle } from "../styles/mixins";
import { colors, breakpoints } from "../styles/variables";
import Helmet from "react-helmet";

interface SeeAlsoItem {
  icon: "APP_STORE" | "GITHUB" | "PLAY_STORE" | "WEB";
  uri: string;
  label: string;
}

const PostWrapper = styled.article`
  font-size: 1.25rem;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-left: 0;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    font-size: 1.125rem;
  }

  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    font-size: 1rem;
  }
`;

interface ShareSheetProps {
  fixed: boolean;
}

const PostContainer = styled(Container)`
  position: relative;
`;

const ShareSheet = styled.aside`
  position: ${(props: ShareSheetProps) => (props.fixed ? "fixed" : "absolute")};
  top: ${(props: ShareSheetProps) => (props.fixed ? "131px" : "40px")};
  right: 50%;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: right;
  color: ${colors.gray60};
  transform: translateX(550px);

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

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
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

const Article = styled.article`
  ${articleStyle} padding: 0 70px;

  .embedVideo-iframe {
    border: 0;
  }

  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    padding-left: 40px;
    padding-right: 40px;

    .gatsby-resp-iframe-wrapper,
    .gatsby-resp-image-wrapper,
    .image-wrapper {
      margin-left: -60px !important;
      margin-right: -60px !important;
    }
  }

  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.sm)}em) {
    .gatsby-resp-iframe-wrapper,
    .gatsby-resp-image-wrapper,
    .image-wrapper {
      margin-left: -56px !important;
      margin-right: -56px !important;
    }
  }

  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    padding-left: 0;
    padding-right: 0;

    .gatsby-resp-iframe-wrapper,
    .gatsby-resp-image-wrapper,
    .image-wrapper {
      margin-left: -16px !important;
      margin-right: -16px !important;
    }
  }
`;

const PostAuthorAvatar = styled(AuthorAvatar)`
  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    float: none;
    margin-bottom: 0.75rem;
    width: 2.25rem;
    height: 2.25rem;
  }
`;

const PostAuthorInfo = styled(AuthorInfo)`
  margin-top: 40px;

  @media (min-width: ${getEmSize(
      breakpoints.xs,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    padding-left: 40px;
  }

  @media (max-width: ${getEmSize(breakpoints.xs)}em) {
    padding-left: 0;
  }
`;

const PostAuthorName = styled(AuthorName)`
  margin-top: 2px;
  margin-left: 70px;
  font-size: 1.125rem;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-left: 0;
  }
`;

const PostAuthorDesc = styled(AuthorDesc)`
  margin-left: 70px;
  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-left: 0;
  }
`;

const PostDate = styled(PostAuthorDesc)`
  margin-top: 1.125rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-top: 0;
  }
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
        slug: string;
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
        <Helmet>
          <title>
            {post.frontmatter.title}
            :: Mesh Korea Makers Blog
          </title>
          <meta name="description" content={post.excerpt} />
          <meta
            name="keywords"
            content={`Mesh Korea, 메쉬코리아, 블로그, 기술 블로그, tech blog, makers blog${
              post.frontmatter.tags ? `, ${post.frontmatter.tags}` : ""
            }`}
          />
          <meta
            property="og:url"
            content={`https://meshkorea.github.io${post.fields.slug}`}
          />
          <meta
            property="og:title"
            content={`${post.frontmatter.title}
            :: Mesh Korea Makers Blog`}
          />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={`https://meshkorea.github.io${
              post.frontmatter.titleImage.childImageSharp.resize.src
            }`}
          />
        </Helmet>
        <Page>
          <PostHeading
            titleImage={post.frontmatter.titleImage.childImageSharp.resize.src}
            title={post.frontmatter.title}
            tags={post.frontmatter.tags}
          />
          <PostContainer>
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
                    <OutboundLink
                      key={x.icon}
                      href={x!.uri}
                      target="_blank"
                      title={x.label}
                    >
                      <Icon name={x!.icon} />
                    </OutboundLink>
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
              <TOC
                fixed={this.state.tocFixed}
                generatedTOC={post.tableOfContents}
              />
              <Article dangerouslySetInnerHTML={{ __html: post.html }} />
            </PostWrapper>
          </PostContainer>
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

      if (
        (window.innerWidth <= breakpoints.sm && window.scrollY > 414) ||
        window.scrollY > 506
      ) {
        if (!this.state.tocFixed) {
          this.setState({ tocFixed: true });
        }
      } else if (window.scrollY < 506 && this.state.tocFixed) {
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
        slug
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
