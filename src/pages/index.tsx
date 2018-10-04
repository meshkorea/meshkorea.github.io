import * as React from "react";
import styled from "react-emotion";
import { Link, graphql } from "gatsby";

import AuthorInfo, {
  AuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Icon from "../components/Icon";
import { NavigationWrapper, NavigationLink } from "../components/Navigation";
import Page from "../components/Page";
import { TagList } from "../components/PostList";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { clearfix } from "../styles/mixins";
import { colors } from "../styles/variables";
import { transformTags } from "../utils/tag";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: {
          excerpt: string;
          longerExcerpt: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            date: string;
            title: string;
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
            titleImage: {
              childImageSharp: {
                original: {
                  src: string;
                };
                resize: {
                  src: string;
                };
              };
            };
            tags?: string;
          };
        };
      }>;
    };
  };
}

interface BackgroundFigureProps {
  src?: string;
}

const RecentPageWrapper = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
  color: ${colors.white};
  word-break: keep-all;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const RecentPageContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-position: 50% 50%;
  background-size: cover;
  background-image: ${(props: BackgroundFigureProps) =>
    props.src ? `url(${props.src})` : "none"};
  filter: brightness(85%);
  transition: transform 0.5s;

  div:hover > & {
    transform: scale(1.05);
  }
`;

const RecentBadge = styled.aside`
  flex: 1;
  font-size: 0.875rem;

  > strong {
    font-weight: 500;
  }
`;

const RecentTitle = styled.h2`
  font-size: 2.5rem;

  > sup {
    margin-left: 20px;
    font-size: 1rem;
    top: -1.2rem;
  }
`;

const RecentExcerpt = styled.summary`
  width: 620px;
`;

const PostList = styled.ul`
  ${clearfix} margin: 50px -10px 0;
  padding: 0;
  list-style: none;
  list-style-image: none;
`;

const ListItem = styled.li`
  float: left;
  margin: 0 10px 40px;
  width: 300px;
  color: ${colors.gray80};

  a {
    color: inherit;
  }
`;

const ListItemTitle = styled.h3`
  margin: 10px 0 0;
  font-size: 1.25rem;
  transition: color 0.5s;
  color: ${colors.gray100};

  a:hover & {
    color: ${colors.primary100};
  }
`;

const ListItemImgWrapper = styled.figure`
  margin: 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ListItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-image: ${(props: BackgroundFigureProps) =>
    props.src ? `url(${props.src})` : "none"};
  transition: transform 0.5s, filter 0.5s;

  a:hover & {
    transform: scale(1.15);
    filter: brightness(110%);
  }
`;

const IndexPage: React.SFC<IndexPageProps> = props => {
  const data = props.data;
  if (!data.allMarkdownRemark || !data.allMarkdownRemark.edges.length) {
    return (
      <IndexLayout>
        <Page>
          <Container>No Content</Container>
        </Page>
      </IndexLayout>
    );
  }
  const mostRecentPost = data.allMarkdownRemark.edges[0].node;
  const posts = data.allMarkdownRemark.edges.filter(
    (_, idx) => idx > 0 && idx < 10,
  );
  const isNextPageExist = data.allMarkdownRemark.edges.length > 10;
  return (
    <IndexLayout>
      <Page>
        <Link to={mostRecentPost.fields.slug}>
          <RecentPageWrapper>
            <BackgroundContainer
              src={
                mostRecentPost.frontmatter.titleImage.childImageSharp.original
                  .src
              }
            />
            <RecentPageContainer>
              <RecentBadge>
                <strong>RECENT</strong>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                {(mostRecentPost.frontmatter.tags || "")
                  .split(",")
                  .map(x => `#${x.trim()}`)
                  .join(" ")}
              </RecentBadge>
              <RecentTitle>
                {mostRecentPost.frontmatter.title}
                <sup>by {mostRecentPost.frontmatter.author.id}</sup>
              </RecentTitle>
              <RecentExcerpt>{mostRecentPost.longerExcerpt}</RecentExcerpt>
            </RecentPageContainer>
          </RecentPageWrapper>
        </Link>
        <Container>
          <PostList>
            {posts.map(({ node }) => (
              <ListItem key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <ListItemImgWrapper>
                    <ListItemImg
                      src={
                        node.frontmatter.titleImage.childImageSharp.resize.src
                      }
                    />
                  </ListItemImgWrapper>
                  <ListItemTitle>{node.frontmatter.title}</ListItemTitle>
                  <TagList>
                    {transformTags(node.frontmatter.tags, true)}
                  </TagList>
                  <summary>{node.excerpt}</summary>
                  <AuthorInfo>
                    <AuthorAvatar
                      src={node.frontmatter.author.avatar.children[0].fixed.src}
                    />
                    <AuthorName>{node.frontmatter.author.name}</AuthorName>
                    <AuthorDesc>{node.frontmatter.date}</AuthorDesc>
                  </AuthorInfo>
                </Link>
              </ListItem>
            ))}
          </PostList>
          {isNextPageExist && (
            <NavigationWrapper>
              <NavigationLink prev to="/pages/2">
                <Icon name="CARET_SMALL_LEFT" width={16} height={12} />
                Older
              </NavigationLink>
            </NavigationWrapper>
          )}
        </Container>
      </Page>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 11
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 80)
          longerExcerpt: excerpt(truncate: true, pruneLength: 140)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
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
            titleImage {
              childImageSharp {
                original {
                  src
                }
                resize(width: 600) {
                  src
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
