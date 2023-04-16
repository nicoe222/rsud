import { sanityClient } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { doc2 } from "@/public/assets";
import { Dokter } from "@/typings";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

async function page({ params: { slug } }: Props) {
  const query = groq`*[_type == 'dokter' && slug.current == $slug][0]{
    ...,
    author->,
    hari[]->,
    klinik[]->,  
  }`;

  const dokters: Dokter = await sanityClient.fetch(query, { slug });

  console.log(dokters);

  return (
    <>
      <div className="px-48 py-8">
        <div className="w-full flex flex-col space-y-4">
          <div className="w-full flex space-x-4">
            <div className="w-1/3">
              <Image
                src={urlFor(dokters.mainImage).url()}
                alt=""
                height={1000}
                width={1000}
              />
            </div>

            <div className="w-2/3 ">
              <div className="flex flex-col space-y-2 mb-4">
                <span className="text-judul font-semibold text-3xl">
                  {dokters.name}
                </span>
                <span className="text-xs text-gray-500">Dilihat : 995</span>
                <hr></hr>
              </div>

              <div className="relative">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="w-full bg-blue-400">
                      <th className="w-1/3">Hari</th>
                      <th className="py-2 w-2/3">Waktu</th>
                    </tr>
                  </thead>
                  {dokters.hari.map((haris) => (
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {haris.day}
                        </th>
                        <td className="py-1">{haris.waktu}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-[10px]">
            <p>
              * Jadwal Dokter dapat berubah sewaktu-waktu. Informasi lebih
              lanjut dapat menghubungi Call Center di +62217219000 atau lakukan
              <a className="text-blue-700 italic hover:underline cursor-pointer">
                {" "}
                Reservasi Online
              </a>
            </p>
          </div>

          <div>
            <div className="relative">
              {dokters.klinik.map((spesial: any) => (
                <table
                  className="w-96 text-sm text-gray-500 dark:text-gray-400 py-6"
                  key={spesial._id}
                >
                  <tbody className="">
                    <tr className=" dark:bg-gray-800 dark:border-gray-700">
                      <th className=" font-semibold text-judul text-base dark:text-white text-left pb-6">
                        Spesialis
                      </th>
                      <td className="pb-6">:</td>
                      <td className="px-6 pb-6">{spesial.spesialis}</td>
                    </tr>
                    <tr className=" dark:bg-gray-800 dark:border-gray-700 py-6">
                      <th className=" font-semibold text-judul dark:text-white text-left text-base">
                        Klinik
                      </th>
                      <td className="">:</td>
                      <td className="px-6">{spesial.klinik}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
