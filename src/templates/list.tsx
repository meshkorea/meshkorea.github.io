import * as React from "react";
import { Link } from "gatsby";

import AuthorInfo, {
  AuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Page from "../components/Page";
import Container from "../components/Container";
import PostList, {
  ListHead,
  ListDesc,
  ListItem,
  ListItemImg,
  TagList,
} from "../components/PostList";
import IndexLayout from "../layouts";
import { transformTags } from "../utils/tag";

interface ListProps {
  pageTitle: string;
  pathContext: {
    additionalContext: {
      totalItems: number;
      tagName?: string;
      searchQuery?: string;
    };
    first: boolean;
    last: boolean;
    index: number;
    pageCount: number;
    pathPrefix: string;
    group: Array<{
      node: {
        excerpt: string;
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
}

const List: React.SFC<ListProps> = ({ pageTitle, pathContext }) => {
  if (!pathContext || !pathContext.group || !pathContext.group.length) {
    return (
      <IndexLayout>
        <Page>
          <Container>No Content</Container>
        </Page>
      </IndexLayout>
    );
  }
  const posts = pathContext.group;
  return (
    <IndexLayout>
      <Page>
        <Container>
          <ListHead>{pageTitle}</ListHead>
          <ListDesc>
            총 {pathContext.additionalContext.totalItems}
            개의 포스트가 있습니다.
          </ListDesc>
          <PostList>
            {posts.map(({ node }) => (
              <ListItem key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <ListItemImg
                    src={node.frontmatter.titleImage.childImageSharp.resize.src}
                  />
                  <h3>{node.frontmatter.title}</h3>
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
          <div>Navigation goes here</div>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default List;
