import * as React from "react";

import { CreatedPageProps } from "../utils/list";

import List from "./list";

const Pages: React.SFC<CreatedPageProps> = props => {
  return (
    <List
      pageTitle={`#${props.pathContext.additionalContext.tagName}`}
      {...props}
    />
  );
};

export default Pages;
