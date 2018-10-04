import * as React from "react";
import List from "./list";

import { CreatedPageProps } from "../utils/list";

const Pages: React.SFC<CreatedPageProps> = props => {
  return (
    <List
      pageTitle={`#${props.pathContext.additionalContext.tagName}`}
      {...props}
    />
  );
};

export default Pages;
