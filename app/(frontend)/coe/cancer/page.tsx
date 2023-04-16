import { cancer_center } from "@/public/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div className="flex justify-center py-8">
          <h1 className="py-4 text-3xl leading-7 uppercase tracking-widest font-bold text-judul">
            cancer center
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:space-x-4 md:space-y-0 space-y-4">
          <div className="">
            <Image src={cancer_center} alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-justify">
              Cancer Center menyediakan layanan terintegrasi bagi pasien yang
              akan melakukan skrining, diagnosis hingga terapi.
            </p>
            <p className="text-justify">
              Pendekatan pelayanan dilakukan secara multidisiplin dengan
              menggunakan dokter-dokter spesialis handal yang mencakup bidang:
            </p>
            <ul className="list-disc mx-14">
              <li>Bedah Onkologi</li>
              <li>Onkologi Medik</li>
              <li>Ginekologi Onkologi</li>
              <li>Orthopedi Onkologi</li>
              <li>Bedah Digestif</li>
              <li>Bedah Anak</li>
            </ul>
            <p className="text-justify">
              Layanan Penunjang seperti Psikiater, Fisioterapi, Gizi Klinik,
              Terapi Wicara, Layanan Rawat Luka, Kunjungan rumah dan Tim Hospice
              Palliative Care (HPC).
            </p>
            <p>Fasilitas Pendukung:</p>
            <ul className="list-disc mx-14">
              <li>
                Radiologi: MRI 3 tesla, CT Scan 128 slices, Mammografi, X-Ray,
                USG
              </li>
              <li>
                Kedokteran Nuklir & Teranostik Molekuler: Kamera Gamma SPECT/CT
              </li>
              <li>Rehabilitasi Medis/Fisioterapi</li>
              <li>Radioterapi: LINAC</li>
              <li>
                Laboratorium (Patologi Klinik, Patologi Anatomi, Mikrobiologi)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
