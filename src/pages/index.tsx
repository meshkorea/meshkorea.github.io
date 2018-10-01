import * as React from "react";
import { Link, graphql } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

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
          fields: {
            slug: string;
          };
          frontmatter: {
            date: string;
            title: string;
            tags?: string;
          };
        };
      }>;
    };
  };
}

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => {
  const allMarkdownRemark = data.allMarkdownRemark;
  return (
    <IndexLayout>
      <Page>
        <Container>
          {allMarkdownRemark &&
            allMarkdownRemark.edges.length && (
              <ul>
                {allMarkdownRemark.edges.map(({ node }) => (
                  <li key={node.fields.slug}>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
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
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
