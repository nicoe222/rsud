import { defineField, defineType } from "sanity";

export default defineType({
  name: "hari",
  title: "Hari",
  type: "document",
  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "string",
    }),
    defineField({
      name: "waktu",
      title: "Waktu",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "day",
      subtitle: "waktu",
    },
  },
});
