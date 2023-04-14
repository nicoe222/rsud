import React from "react";
import {
  ablasi,
  bu,
  icu,
  igd1,
  igd2,
  igd3,
  igd4,
  igd5,
  kamar,
  kamaribu,
  su,
} from "@/public/assets";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div className="">
          <div className="flex justify-center">
            <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
              Alur Rawat Inap
            </h1>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 pt-4">
            <div
              className=" bg-white border-r-[1px] border-b-[1px] md:border-b-0 
      border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer"
            >
              <Image src={igd1} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2 pb-8">
                <p className="text-center text-gray-700">
                  Pasien mendapat surat rujukan dari poliklinik atau dari
                  Instalasi Gawat Darurat.
                </p>
              </div>
            </div>

            <div className=" bg-white border-r-[1px] border-b-[1px] md:border-b-0 border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer">
              <Image src={igd2} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2 pb-8">
                <p className="text-center text-gray-700">
                  Ambil nomor antrian pada mesin antrian dan melakukan
                  registrasi di bagian pendaftaran.
                </p>
              </div>
            </div>
            <div className=" bg-white border-r-[1px] border-b-[1px] md:border-b-0 border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer">
              <Image src={igd3} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2 pb-8">
                <p className="text-center text-gray-700">
                  Pasien di antar ke kamar oleh Perawat jika telah selesai
                  registrasi dan dokumen lengkap.
                </p>
              </div>
            </div>
            <div className=" bg-white border-r-[1px] border-b-[1px] md:border-b-0 border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer">
              <Image src={igd4} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2 pb-8">
                <p className="text-center text-gray-700">
                  Perawat serta Dokter akan selalu memantau keadaan pasien untuk
                  memberikan pelayanan yang terbaik.
                </p>
              </div>
            </div>
            <div className=" bg-white border-r-[1px]  border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer">
              <Image src={igd5} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2 pb-8">
                <p className="text-center text-gray-700">
                  Jika pasien telah pulang rawat, lakukan penyelesaian
                  administrasi dan pembayaran.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center py-8">
            <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
              Rawat Inap
            </h1>
          </div>
          <div className="space-y-4">
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={kamar}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Rawat Inap
                </h5>
                <p className="font-normal text-gray-700">
                  Kami berupaya memberikan yang terbaik dalam pengobatan dan
                  perawatan dengan suasana senyaman mungkin, didukung
                  tenaga-tenaga yang professional pada bidangnya. Prinsip kami
                  adalah memberikan pelayanan prima untuk semua pelanggan.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={kamaribu}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Rawat Inap Maternitas, Ibu & Anak
                </h5>
                <p className="font-normal text-gray-700">
                  Kami berupaya memberikan yang terbaik dalam pengobatan dan
                  perawatan dengan suasana senyaman mungkin, didukung
                  tenaga-tenaga yang professional pada bidangnya. Prinsip kami
                  adalah memberikan pelayanan prima untuk semua pelanggan.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={icu}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  ICU / ICCU / PICU / NICU
                </h5>
                <p className="font-normal text-gray-700">
                  Sebagai salah satu unit perawatan intensif dilengkapi
                  peralatan canggih dengan monitor central yang memungkinkan
                  pemanatauan ketat dan upaya penyelamatan intensif setiap saat
                  bagi pasien-pasien kritis dari segala usia.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={bu}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Burn Unit</h5>
                <p className="font-normal text-gray-700">
                  Unit luka bakar RSPP satu diantara yang terbaik di Indonesia
                  dilengkapi dengan fasilitas dan penanganan pasien terpadu
                  melibatkan bidang spesialistis khususnya bedah plastik
                  rehabilitasi medik dan konsulatasi bagi pemulihan trauma
                  kejiwaan.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={su}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Stroke Unit
                </h5>
                <p className="font-normal text-gray-700">
                  Fasilitas rawat intensif kami lainnya, stroke unit memiliki
                  perawatan medis lengkap serta fisioteraphi ditempat. Anda akan
                  mendapatkan perawatan dari paramedis bersertifikasi dalam
                  usaha pemulihan yang optimal dengan resiko pasca stroke yang
                  minimal.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={ablasi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Ruang Isolasi / Ablasi
                </h5>
                <p className="font-normal text-gray-700">
                  Merupakan ruangan yang didesain khusus untuk menangani pasien
                  infeksius dan terpisah dari pasien lain. Ruang isolasi yang
                  menggunakan tekanan udara negatif digunakan untuk pasien
                  infeksi yang penularannya bisa terjadi lewat udara. Ruangan
                  Ablasi di lengkapi dengan proteksi radiasi untuk menghindari
                  radiasi nuklir dari pasien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
