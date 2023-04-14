import React from "react";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import BlogList from "@/components/BlogList";

interface Props {
  posts: Post;
}

const query = groq`*['Berita' in categories[]->title]{
    ...,
    author->,
    categories[]->,
   
   } | order(_createdAt desc)`;

export default async function page() {
  const posts = await sanityClient.fetch(query);

  //console.log(posts);

  return <BlogList posts={posts} />;
}
