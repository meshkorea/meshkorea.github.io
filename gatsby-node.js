"use strict";

const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case "MarkdownRemark": {
      const { permalink, layout } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace(/(\.md|\/index\.md)/, "")}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: "slug",
        value: slug || "",
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: "layout",
        value: layout || "",
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 160)
            fields {
              layout
              slug
            }
            frontmatter {
              date
              tags
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
              authorDesc
              titleImage {
                childImageSharp {
                  resize(width: 600) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  createPaginatedPages({
    edges: allMarkdown.data.allMarkdownRemark.edges,
    createPage: createPage,
    pageTemplate: "./src/templates/pages.tsx",
    pathPrefix: "pages",
    pageLength: 10,
    context: {
      totalItems: allMarkdown.data.allMarkdownRemark.edges.length,
    },
  });

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || "post"}.tsx`),
      context: {
        slug,
      },
    });
  });
};
