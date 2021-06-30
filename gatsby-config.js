"use strict";

module.exports = {
  siteMetadata: {
    title: "MESH KOREA | VROONG 테크 블로그",
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
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              containerClass: "embedVideo-container",
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
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 980,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle:
                "margin-left: -70px; margin-right: -70px; text-align: center",
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
        siteUrl: "https://meshkorea.github.io",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mesh Korea Makers Blog",
        icons: [
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
        ],
        theme_color: "#1b3993",
        background_color: "#fff",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-71371143-19",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    "gatsby-plugin-no-sourcemaps",
  ],
};
