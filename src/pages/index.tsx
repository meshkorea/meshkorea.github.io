import * as React from "react";
import styled from "@emotion/styled";
import { Link, graphql } from "gatsby";

import AuthorInfo, {
  AuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Icon from "../components/Icon";
import { NavigationWrapper, NavigationLink } from "../components/Navigation";
import Page from "../components/Page";
import { TagList as PostTagList } from "../components/PostList";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { getEmSize, resetUl } from "../styles/mixins";
import { breakpoints, colors } from "../styles/variables";
import { transformTags } from "../utils/tag";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    posts: {
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
            tags?: string[];
          };
        };
      }>;
    };
    tagsGroup: {
      tags: Array<{
        tag: string;
        count: number;
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

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    height: 360px;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    height: 480px;
  }
`;

const RecentPageContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${colors.gray60};
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

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    font-size: 2rem;

    > sup {
      top: -0.8rem;
    }
  }
`;

const RecentExcerpt = styled.summary`
  max-width: 620px;
`;

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-image: none;

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    margin-top: 30px;
  }
`;

const ListItem = styled.li`
  margin: 0 10px 40px;
  width: 300px;
  color: ${colors.gray80};

  a {
    color: inherit;
  }

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    margin-left: 0;
    margin-right: 0;
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    width: 100%;
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
  background-color: ${colors.gray40};
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

const GridWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px -10px 0;

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    flex-wrap: wrap;
  }
`;

const TagListWrapper = styled.aside`
  position: absolute;
  right: 0;
  width: 140px;
  font-size: 0.875em;

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    position: static;
    flex: 0;
    order: -1;
    margin-top: -30px;
    width: 100%;
    padding: 0;
  }
`;

const TagListTitle = styled.h3`
  margin: 0;
  font-size: 1em;
  text-transform: uppercase;

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    margin: 0 10px;
    padding-top: 16px;
  }
`;

const TagList = styled.ul`
  ${resetUl};
  margin: 10px 0 0 0;
  padding: 0;

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    margin: 10px 10px 0;
  }
`;

const TagItem = styled.li`
  margin: 0;
  padding: 0;

  &::before {
    content: "-";
    margin-right: 10px;
    color: ${colors.gray60};
  }

  a {
    color: ${colors.gray100};

    i {
      margin-left: 0.25em;
      font-size: 0.875em;
      font-style: normal;
      color: ${colors.gray80};
    }
  }

  a:hover {
    color: ${colors.gray80};
  }

  @media (max-width: ${getEmSize(breakpoints.xl)}em) {
    display: inline-block;

    & + & {
      margin-left: 20px;
    }
  }
`;

const predefinedCategories = [
  "Dev Notes",
  "People & Culture",
  "Bookshelf",
  "Newsroom",
];

const IndexPage: React.SFC<IndexPageProps> = props => {
  const data = props.data;
  if (!data.posts || !data.posts.edges.length) {
    return (
      <IndexLayout>
        <Page>
          <Container>No Content</Container>
        </Page>
      </IndexLayout>
    );
  }
  const mostRecentPost = data.posts.edges[0].node;
  const posts = data.posts.edges.filter((_, idx) => idx > 0 && idx < 10);
  const isNextPageExist = data.posts.edges.length > 10;

  const filteredTags = data.tagsGroup.tags.filter(({ tag }) =>
    predefinedCategories.includes(tag),
  );

  console.log(mostRecentPost.frontmatter);

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
                {(mostRecentPost.frontmatter.tags || [])
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
          <GridWrapper>
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
                    <PostTagList>
                      {transformTags(node.frontmatter.tags, true)}
                    </PostTagList>
                    <summary>{node.excerpt}</summary>
                    <AuthorInfo>
                      <AuthorAvatar
                        src={
                          node.frontmatter.author.avatar.children[0].fixed.src
                        }
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
            <TagListWrapper>
              <TagListTitle>Categories</TagListTitle>
              <TagList>
                {filteredTags.map(({ tag, count }) => (
                  <TagItem key={tag}>
                    <a href={`/tags/${tag}`}>
                      {tag}
                      <i>({count})</i>
                    </a>
                  </TagItem>
                ))}
              </TagList>
            </TagListWrapper>
          </GridWrapper>
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
    posts: allMarkdownRemark(
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
    tagsGroup: allMarkdownRemark {
      tags: group(field: frontmatter___tags) {
        tag: fieldValue
        count: totalCount
      }
    }
  }
`;

export default IndexPage;
