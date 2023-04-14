import { RichTextComponents } from "@/components/RichTextComponents";
import { sanityClient } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { BsCalendar2Date, BsFillEyeFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

async function page({ params: { slug } }: Props) {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->,

}`;

  const post: Post = await sanityClient.fetch(query, { slug });

  return (
    <>
      <div className="px-6 md:px-52 bg-red-50 h-auto w-full py-4">
        <div className="">
          <div className="pb-4">
            <strong className="md:text-3xl text-xl">{post.title}</strong>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              className=" min-h-96 w-full aspect-auto object-cover"
              height={384}
              width={384}
              quality={100}
            />
          </div>
          <div className="flex flex-col py-4">
            <div className="flex items-center space-x-4 pb-4">
              <div className="flex items-center space-x-1 text-xs">
                <BsCalendar2Date className="" />
                <h5 className=" text-gray-400">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </h5>
              </div>
              <div className="text-xs flex items-center space-x-1 text-gray-400">
                <BsFillEyeFill />
                <h5> 147 dilihat</h5>
              </div>
              <div className="text-xs flex items-center space-x-1 text-gray-400">
                <FaUser />
                <h5> {post.author.name}</h5>
              </div>
            </div>
            <hr className=""></hr>
          </div>
        </div>
        <div className="space-y-4 text-justify indent-10 text-sm text-gray-500">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </div>
    </>
  );
}

export default page;
