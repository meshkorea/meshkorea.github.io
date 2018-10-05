import * as React from "react";
import { Link } from "gatsby";

import AuthorInfo, {
  AuthorAvatar,
  AuthorName,
  AuthorDesc,
} from "../components/AuthorInfo";
import Icon from "../components/Icon";
import { NavigationWrapper, NavigationLink } from "../components/Navigation";
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
import { CreatedPageProps } from "../utils/list";
import { transformTags } from "../utils/tag";

interface ListProps extends CreatedPageProps {
  pageTitle: string;
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
                  <h3>{node.frontmatter.title}</h3>
                  <ListItemImg
                    src={node.frontmatter.titleImage.childImageSharp.resize.src}
                  />
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
          {(!pathContext.first || !pathContext.last) && (
            <NavigationWrapper>
              {!pathContext.last && (
                <NavigationLink
                  prev
                  to={`/${pathContext.pathPrefix}/${pathContext.index + 1}`}
                >
                  <Icon name="CARET_SMALL_LEFT" width={16} height={12} />
                  Older
                </NavigationLink>
              )}
              {!pathContext.first && (
                <NavigationLink
                  to={
                    pathContext.index > 2
                      ? `/${pathContext.pathPrefix}/${pathContext.index - 1}`
                      : `/${pathContext.pathPrefix}`
                  }
                >
                  Newer
                  <Icon
                    name="CARET_SMALL_RIGHT"
                    width={16}
                    height={12}
                    offsetLeft={-4}
                  />
                </NavigationLink>
              )}
            </NavigationWrapper>
          )}
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default List;
