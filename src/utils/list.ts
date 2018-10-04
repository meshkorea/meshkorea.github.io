export interface CreatedPageProps {
  pathContext: {
    additionalContext: {
      totalItems: number;
      tagName?: string;
      searchQuery?: string;
    };
    first: boolean;
    last: boolean;
    index: number;
    pageCount: number;
    pathPrefix: string;
    group: Array<{
      node: {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
          author: {
            id: string;
            name: string;
            bio: string;
            avatar: {
              children: Array<{
                fixed: {
                  src: string;
                };
              }>;
            };
          };
          titleImage: {
            childImageSharp: {
              resize: {
                src: string;
              };
            };
          };
          tags?: string;
        };
      };
    }>;
  };
}
