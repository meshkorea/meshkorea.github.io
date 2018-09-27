import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "modern-normalize";
import "../styles/normalize";

import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";

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

  private renderPage = (data: StaticQueryProps) => {
    return (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.description },
            { name: "keywords", content: "gatsbyjs, gatsby, javascript, sample, something" },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{this.props.children}</LayoutMain>
      </LayoutRoot>
    );
  };
}

export default IndexLayout;
