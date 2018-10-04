"use strict";

module.exports = {
  siteMetadata: {
    title: "Mesh Korea Makers Blog",
    description:
      "메쉬코리아에서 기술, 유저 경험 및 공간 디자인, 서비스 기획 등 물류플랫폼을 만들기 위한 과정에 대한 고민과 그 해결을 담은 블로그입니다.",
    siteUrl: "https://meshkorea.github.io",
    author: {
      name: "Mesh Korea",
      url: "http://www.meshkorea.net",
      email: "makers@meshkorea.net",
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
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
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin: 1.5em -70px",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 940,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle:
                "margin-left: -70px !important; margin-right: -70px !important; text-align: center;",
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-yaml",
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
