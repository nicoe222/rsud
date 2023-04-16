import React from "react";
import { Hero } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import HeroList from "./HeroList";

const query = groq`*[_type == 'hero']{
  ...,
} | order(_createdAt asc)`;

export default async function HeroSection() {
  const heros = await sanityClient.fetch(query);

  return <HeroList posts={heros} />;
}
