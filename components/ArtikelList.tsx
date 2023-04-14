import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import Detail from "./Detail";
import Image from "next/image";
import { Post } from "@/typings";
import urlFor from "@/lib/urlFor";
import CleintSideRoute from "./CleintSideRoute";

type Props = {
  posts: Post[];
};

function ArtikelList({ posts }: Props) {
  return (
    <>
      <div className="md:px-24 px-8">
        <div>
          <div className="flex justify-center space-y-8">
            <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul font-poppins">
              Artikel Kesehatan
            </h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {posts.map((post) => (
              <CleintSideRoute
                key={post._id}
                route={`/informasi/artikel/${post.slug.current}`}
              >
                <div className="w-full  bg-white border border-gray-200 rounded-lg shadow">
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
                      <h5 className="text-xs font-semibold tracking-tight text-gray-400">
                        03-Mar-2023 09:40:42
                      </h5>
                    </div>

                    <div className="flex items-center hover:text-blue-500 hover:cursor-pointer">
                      <p className="text-xl">Apa itu Sidik Perfusi Miokard ?</p>
                    </div>
                    <hr></hr>
                    <Detail />
                  </div>
                </div>
              </CleintSideRoute>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtikelList;
