import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";

import "modern-normalize";
import "../styles/normalize";

import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";
import Footer from "../components/Footer";

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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description,
              },
              {
                name: "keywords",
                content:
                  "Mesh Korea, 메쉬코리아, 블로그, 기술 블로그, tech blog, makers blog, PO, Product Owner, 기획, 디자인, 개발, QA, 서버, 프론트엔드, 안드로이드, 웹, AWS, 머신러닝",
              },
            ]}
          />

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
