import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";

import "modern-normalize";
import globalStyle from "../styles/globalStyle";

import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";
import Footer from "../components/Footer";
import { Global } from "@emotion/react";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

class IndexLayout extends React.Component {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query IndexLayoutQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={this.renderPage}
      />
    );
  }

  private renderPage = (data: StaticQueryProps) => (
    <Location>
      {({ location }) => (
        <LayoutRoot>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta
              name="keywords"
              content="Mesh Korea, 메쉬코리아, 블로그, 기술 블로그, tech blog, makers blog, PO, Product Owner, 기획, 디자인, 개발, QA, 서버, 프론트엔드, 안드로이드, 웹, AWS, 머신러닝"
            />
            <meta property="og:url" content="https://meshkorea.github.io/" />
            <meta property="og:title" content="Mesh Korea Makers Blog" />
            <meta
              property="og:description"
              content={data.site.siteMetadata.description}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://meshkorea.github.io/og-image.jpg"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/favicon.png"
              sizes="1024x1024"
            />
            <link
              rel="icon"
              type="image/png"
              href="/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/favicon-16x16.png"
              sizes="16x16"
            />
            <link rel="mask-icon" href="/mask-icon.svg" color="#1b3993" />
            <link rel="shortcut icon" href="/favicon.ico" />
          </Helmet>

          <Global styles={globalStyle} />
          <Header
            home={location.pathname === "/"}
            title={data.site.siteMetadata.title}
          />
          <LayoutMain home={location.pathname === "/"}>
            {this.props.children}
          </LayoutMain>
          <Footer />
        </LayoutRoot>
      )}
    </Location>
  );
}

export default IndexLayout;
