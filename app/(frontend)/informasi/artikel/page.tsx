import ArtikelList from "@/components/ArtikelList";
import Detail from "@/components/Detail";
import { sanityClient } from "@/lib/sanity.client";
import { miokard } from "@/public/assets";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";

interface Props {
  posts: Post;
}

const query = groq`*['Artikel' in categories[]->title]{
  ...,
  author->,
  categories[]->,
 
 } | order(_createdAt desc)`;

export default async function page() {
  const posts = await sanityClient.fetch(query);

  // console.log(posts);

  return <ArtikelList posts={posts} />;
}
