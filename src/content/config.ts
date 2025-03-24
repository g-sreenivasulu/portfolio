import { file } from "astro/loaders";
import { z, defineCollection, type SchemaContext } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: image(),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Dr. G. Sreenivasulu"),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});

const basePatentSchema = z.object({
  applicationNumber: z.union([z.number(), z.string()]),
  title: z.string(),
  dateFiled: z.string(),
  granted: z.boolean(),
});

const nationalPatentsCollection = defineCollection({
  schema: basePatentSchema,
  loader: file("src/data/patents.json", {
    parser: (text) => JSON.parse(text).national,
  }),
});

const internationalPatentsCollection = defineCollection({
  schema: basePatentSchema,
  loader: file("src/data/patents.json", {
    parser: (text) => JSON.parse(text).international,
  }),
});

const resourcesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({ title: z.string(), coverPhoto: image(), url: z.string().url() }),
  loader: file("src/data/resources.json"),
});

const baseBookSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    coverPhoto: image(),
    publishedURL: z.string().url().or(z.literal("#")),
    yearPublished: z.number().positive(),
  });

const booksPublishedCollection = defineCollection({
  schema: baseBookSchema,
  loader: file("src/data/books-published.json"),
});

const bookChaptersCollection = defineCollection({
  schema: baseBookSchema,
  loader: file("src/data/book-chapters.json"),
});

const awardsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      images: z.array(image()),
    }),
  loader: file("src/data/awards.json"),
});

export const collections = {
  blog: blogCollection,
  nationalPatents: nationalPatentsCollection,
  internationalPatents: internationalPatentsCollection,
  resources: resourcesCollection,
  booksPublished: booksPublishedCollection,
  bookChapters: bookChaptersCollection,
  awards: awardsCollection,
};
