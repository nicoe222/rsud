import { cancer_center, cardio } from "@/public/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div className="flex justify-center py-8">
          <h1 className="py-4 text-3xl leading-7 uppercase tracking-widest font-bold text-judul">
            Cardioneurovascular
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:space-x-4 md:space-y-0 space-y-4">
          <div className="">
            <Image src={cardio} alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-justify">
              Merupakan layanan terpadu multidisiplin yang berfokus pada
              diagnosis, tata laksana dan follow up untuk berbagai kasus
              jantung, pembuluh darah, otak dan saraf. Didukung oleh Dokter
              Spesialis dan Subspesialis yang berpengalaman disertai dengan alat
              penunjang diagnosis dan terapi terkini. Tim kami terdiri dari:
            </p>

            <ul className="list-decimal mx-14">
              <li>Spesialis Jantung dan pembuluh darah Intervensi</li>
              <li>
                Spesialis Jantung dan Pembuluh darah diagnostik Non-Invasif
              </li>
              <li>Spesialis Jantung dan Pembuluh darah elektrofisiologi</li>
              <li>Spesialis Syaraf</li>
              <li>pesialis Syaraf-Neurointervensi</li>
              <li>Spesialis Bedah Syaraf</li>
              <li>Spesialis Bedah Thorak Kardiovaskular</li>
            </ul>
            <p className="text-justify">
              Ditunjang dengan Ruangan CathLab, Ruang rehabilitasi Jantung,
              Ruang EKG,Ruang Treadmill,Ruang Echo, Ruang pemeriksaan ABI, Ruang
              pemasangan ABPM dan Holter, Klinik Gagal Jantung, Klinik Fungsi
              Luhur, Ruang EEG, Ruang EMG dan Ruang ESWT-PMS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
