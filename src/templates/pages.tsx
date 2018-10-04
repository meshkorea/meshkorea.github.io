import * as React from "react";

import { CreatedPageProps } from "../utils/list";

import List from "./list";

const Pages: React.SFC<CreatedPageProps> = props => {
  return (
    <List
      pageTitle={`Page ${props.pathContext.index} of ${
        props.pathContext.pageCount
      }`}
      {...props}
    />
  );
};

export default Pages;
