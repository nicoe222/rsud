import Image from "next/image";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { doc2 } from "../public/assets";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import BlogList from "@/components/BlogList";
import CleintSideRoute from "./CleintSideRoute";

interface Props {
  posts: Post;
}

const query = groq`*['Berita' in categories[]->title]{
    ...,
    author->,
    categories[]->,
   
   } | order(_createdAt desc)`;

export default async function Berita() {
  const posts = await sanityClient.fetch(query);

  return (
    <div className="bg-white dark:bg-slate-800/80 w-full">
      <div className="flex justify-center">
        <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
          Berita
        </h1>
      </div>
      <div className="px-8 md:px-24 py-8 grid md:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <CleintSideRoute
            key={post.id}
            route={`/informasi/berita/${post.slug.current}`}
          >
            <div className="w-full max-w-sm bg-white dark:bg-slate-700 border border-gray-200 dark:border-[0px] rounded-lg shadow-sm">
              {post.categories.map((category: any) => (
                <p
                  key={category._id}
                  className="flex px-2 m-3 py-[1px] rounded-md text-sm md:text-base 
        font-extralight text-white z-10 absolute bg-blue-400 dark:bg-slate-600"
                >
                  {category.title}
                </p>
              ))}
              <Image className="rounded-t-lg" src={doc2} alt="product image" />

              <div className="px-5 pb-5 space-y-3">
                <div className="flex items-center space-x-1 mt-4">
                  <BsCalendar2Date className="text-xs" />
                  <span className="text-xs font-semibold tracking-tight text-gray-400">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
                  <p className="text-lg">{post.description}</p>
                </div>
              </div>
            </div>
          </CleintSideRoute>
        ))}
      </div>
    </div>
  );
}
