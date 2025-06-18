const meta_blog = {
  index: {
    type: "page",
    title: "Blog",
    theme: {
      layout: "default",
      sidebar: false,
      pagination: false,
      toc: false,
      typesetting: "article",
      breadcrumb: false
    }
  },
  posts: {
    title: "Posts",
    display: "hidden",
    theme: {
      layout: "default",
      sidebar: true,
      toc: true,
      typesetting: "article",
      breadcrumb: false
    }
  },
  tags: {
    title: "Tags",
    theme: {
      layout: "default",
      sidebar: false,
      toc: true,
      typesetting: "article",
      breadcrumb: false
    }
  }
};

export default meta_blog;
