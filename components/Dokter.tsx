import Image from "next/image";
import React from "react";
import { doc1, doc2, doc3 } from "../public/assets";
import { BsEye } from "react-icons/bs";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import CleintSideRoute from "./CleintSideRoute";
import { Dokter } from "@/typings";
import urlFor from "@/lib/urlFor";

interface Props {
  dokters: Dokter;
}

const query = groq`*[_type == 'dokter']{
  ...,
  author->,
  hari[]->,
  klinik[]->,  
} | order(_createdAt asc)`;

export default async function Dokters() {
  const dokters = await sanityClient.fetch(query);

  return (
    <div className="bg-gray-50/80 dark:bg-slate-800/80 w-full">
      <div className="flex justify-center">
        <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
          Dokter Kami
        </h1>
      </div>

      <div className="px-8 md:px-24 py-8 grid md:grid-cols-3 gap-4">
        {dokters.map((dokterss: any) => (
          <CleintSideRoute
            key={dokterss._id}
            route={`/dokter/${dokterss.slug.current}`}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer bg-white dark:bg-slate-800">
              <Image
                className="w-full"
                src={urlFor(dokterss.mainImage).url()}
                alt=""
                width={1000}
                height={1000}
              />
              <div className="px-6 py-4 space-y-2">
                <span className="text-xl text-blue-500 mb-1">
                  {dokterss.name}
                </span>
                {dokterss.klinik.map((spesial: any) => (
                  <p
                    key={spesial._id}
                    className="text-gray-700 text-base dark:text-gray-50"
                  >
                    {spesial.spesialis}
                  </p>
                ))}
              </div>
              <div className="w-full flex justify-center">
                <div className="flex w-fit my-4 items-center text-xs gap-2 outline outline-1 px-2 py-1 hover:bg-slate-100 outline-gray-500 rounded-sm">
                  <BsEye />
                  <button className="uppercase text-gray-600 ">
                    Lihat Jadwal
                  </button>
                </div>
              </div>
            </div>
          </CleintSideRoute>
        ))}
      </div>
    </div>
  );
}
