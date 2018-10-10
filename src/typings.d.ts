interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "gatsby-plugin-google-analytics" {
  const OutboundLink: React.ComponentType<React.HTMLProps<HTMLAnchorElement>>;
}
