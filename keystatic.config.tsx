import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {
      name: "Day Portfolio",
      mark: () => {
        let path = "https://www.dayanaabuinrios.marketing/favicon/favicon.ico";
        return <img src={path} height={24} />;
      },
    },
  },
  collections: {
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "A brief description of the blog post",
        }),
        publishDate: fields.date({
          label: "Publish Date",
          defaultValue: { kind: "today" },
        }),
        updatedDate: fields.date({
          label: "Updated Date",
          description: "Optional: When the post was last updated",
        }),
        isFeatured: fields.checkbox({
          label: "Featured Post",
          defaultValue: false,
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        seo: fields.object({
          title: fields.text({
            label: "SEO Title",
            description: "Title for search engines (5-120 characters)",
            validation: { length: { min: 5, max: 120 } },
          }),
          description: fields.text({
            label: "SEO Description",
            description: "Description for search engines (15-160 characters)",
            multiline: true,
            validation: { length: { min: 15, max: 160 } },
          }),
          image: fields.object({
            src: fields.image({
              label: "Image",
              directory: "./public/",
              publicPath: "/public",
            }),
            alt: fields.text({ label: "Alt Text" }),
          }),
          pageType: fields.select({
            label: "Page Type",
            options: [
              { label: "Website", value: "website" },
              { label: "Article", value: "article" },
            ],
            defaultValue: "website",
          }),
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "./public/",
              publicPath: "/public",
            },
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        publishDate: fields.date({
          label: "Publish Date",
          defaultValue: { kind: "today" },
        }),
        isFeatured: fields.checkbox({
          label: "Featured Project",
          defaultValue: false,
        }),
        seo: fields.object({
          title: fields.text({
            label: "SEO Title",
            description: "Title for search engines (5-120 characters)",
            validation: { length: { min: 5, max: 120 } },
          }),
          description: fields.text({
            label: "SEO Description",
            description: "Description for search engines (15-160 characters)",
            multiline: true,
            validation: { length: { min: 15, max: 160 } },
          }),
          image: fields.object({
            src: fields.image({
              label: "Image",
              directory: "./public/",
              publicPath: "/public",
            }),
            alt: fields.text({ label: "Alt Text" }),
          }),
          pageType: fields.select({
            label: "Page Type",
            options: [
              { label: "Website", value: "website" },
              { label: "Article", value: "article" },
            ],
            defaultValue: "website",
          }),
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "./public/",
              publicPath: "/public",
            },
          },
        }),
      },
    }),
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        seo: fields.object({
          title: fields.text({
            label: "SEO Title",
            description: "Title for search engines (5-120 characters)",
            validation: { length: { min: 5, max: 120 } },
          }),
          description: fields.text({
            label: "SEO Description",
            description: "Description for search engines (15-160 characters)",
            multiline: true,
            validation: { length: { min: 15, max: 160 } },
          }),
          image: fields.object({
            src: fields.image({
              label: "Image",
              directory: "./public",
              publicPath: "/public/",
            }),
            alt: fields.text({ label: "Alt Text" }),
          }),
          pageType: fields.select({
            label: "Page Type",
            options: [
              { label: "Website", value: "website" },
              { label: "Article", value: "article" },
            ],
            defaultValue: "website",
          }),
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "./public/",
              publicPath: "/public",
            },
          },
        }),
      },
    }),
  },
});
