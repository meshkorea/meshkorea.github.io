import { css } from "@emotion/react";
import { dimensions, fonts, colors, breakpoints } from "./variables";
import { getEmSize } from "./mixins";

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.gray100};
    background-color: ${colors.gray10};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${colors.primary100};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0.25rem 0.5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.414rem;
    margin-bottom: 0.5rem;
    color: inherit;
    font-weight: 700;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4,
  h5,
  h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: inherit;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${colors.ui.light};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  /* PrismJS 1.15.0
  https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+c+csharp+bash+cpp+css-extras+django+markup-templating+gherkin+git+go+graphql+handlebars+http+java+json+kotlin+latex+markdown+makefile+nginx+objectivec+php+php-extras+powershell+scss+python+jsx+typescript+sass+scala+swift+yaml+tsx+vim+wasm */
  /**
  * prism.js default theme for JavaScript, CSS and HTML
  * Based on dabblet (http://dabblet.com)
  * @author Lea Verou
  */

  code[class*="language-"],
  pre[class*="language-"] {
    color: black;
    background: none;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export default globalStyle;
