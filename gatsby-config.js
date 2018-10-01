"use strict";

module.exports = {
  siteMetadata: {
    title: "Mesh Korea Makers Blog",
    description:
      "A starter kit for TypeScript-based Gatsby projects with sensible defaults.",
    siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
    author: {
      name: "Resi Respati",
      url: "https://twitter.com/resir014",
      email: "resir014@gmail.com",
    },
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 940,
              wrapperStyle:
                "margin-left: -70px; margin-right: -70px; text-align: center;",
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin: 1.5em -70px",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
  ],
};
