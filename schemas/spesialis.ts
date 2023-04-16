import { defineField, defineType } from "sanity";

export default defineType({
  name: "spesialis",
  title: "Spesialis",
  type: "document",
  fields: [
    defineField({
      name: "klinik",
      title: "Klinik",
      type: "string",
    }),
    defineField({
      name: "spesialis",
      title: "Spesialis",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "klinik",
      subtitle: "spesialis",
    },
  },
});
