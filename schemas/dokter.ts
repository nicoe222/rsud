import { defineField, defineType } from "sanity";

export default defineType({
  name: "dokter",
  title: "Dokter",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Dokter Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "klinik",
      title: "Klinik",
      type: "array",
      of: [{ type: "reference", to: { type: "spesialis" } }],
    }),
    defineField({
      name: "hari",
      title: "Hari dan Jam",
      type: "array",
      of: [{ type: "reference", to: { type: "hari" } }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
