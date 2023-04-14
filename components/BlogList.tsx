import { Post } from "@/typings";
import Image from "next/image";
import React from "react";
import urlFor from "@/lib/urlFor";
import { BsCalendar2Date } from "react-icons/bs";
import CleintSideRoute from "./CleintSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <>
      <div className="md:px-24 px-8 ">
        <div className="flex justify-center">
          <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul dark:text-[#2C74B3] font-poppins">
            Berita
          </h1>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 pt-4 gap-4 py-8">
          {posts.map((post) => (
            <CleintSideRoute
              key={post._id}
              route={`/informasi/berita/${post.slug.current}`}
            >
              <div className="w-full max-w-sm bg-white dark:bg-slate-800 border dark:border-[0px] border-gray-200 rounded-lg shadow ">
                <div>
                  {post.categories.map((category) => (
                    <span
                      className="flex px-3 m-3 py-[1px] rounded-md text-base font-extralight  text-white z-10 absolute bg-blue-400"
                      key={category._id}
                    >
                      {category.title}
                    </span>
                  ))}
                  <Image
                    className="rounded-t-lg"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    height={500}
                    width={500}
                  />
                </div>
                <div className="px-5 pb-5 space-y-3">
                  <div className="flex items-center space-x-1 mt-4">
                    <BsCalendar2Date className="text-xs" />
                    <h5 className="text-xs tracking-tight text-gray-400 font-poppins">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </h5>
                  </div>

                  <div className="flex items-center hover:text-blue-500 hover:cursor-pointer line-clamp-2">
                    <p className="text-xl">{post.description}</p>
                  </div>
                </div>
              </div>
            </CleintSideRoute>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogList;
