import { burn } from "@/public/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div className="flex justify-center py-8">
          <h1 className="py-4 text-3xl leading-7 uppercase tracking-widest font-bold text-judul">
            Burn Unit
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:space-x-4 md:space-y-0 space-y-4">
          <div className="">
            <Image src={burn} alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-justify">
              Burn Unit (Luka Bakar) RSPP merupakan sebuah fasilitas layanan
              untuk pasien luka bakar anak dan dewasa dengan sistem pelayanan
              yang komprehensif dan terintegrasi, berdasarkan kompetensi
              keilmuan dan teknologi terkini.
            </p>
            <p className="text-justify">
              Pelayanan medis di Burn Unit RSPP dikerjakan oleh tenaga kesehatan
              profesional yang memiliki kompetensi sesuai bidang keilmuan. Tim
              Dokter Bedah Plastik Rekonstruksi dan Estetik berkolaborasi dengan
              berbagai disiplin ilmu sesuai dengan kasus luka bakar yang
              ditangani, diantaranya yaitu:
            </p>
            <ul className="list-disc mx-14">
              <li>Dokter Spesialis Penyakit Dalam,</li>
              <li>Dokter Spesialis Anak,</li>
              <li>Dokter Spesialis Paru,</li>
              <li>Dokter Spesialis Jantung,</li>
              <li>Dokter Spesialis Anestesi,</li>
              <li>Dokter Spesialis THT-KL,</li>
              <li>Dokter Spesialis Orthopedi,</li>
              <li>Dokter Spesialis Kedokteran Fisik dan Rehabilitasi,</li>
              <li>Dokter Spesialis Gizi Klinis,</li>
              <li>Dokter Spesialis Kedokteran Jiwa,</li>
            </ul>

            <p>Tim pendukung lainnya terdiri dari:</p>
            <ul className="list-disc mx-14">
              <li>Tim Keperawatan Khusus Luka Bakar,</li>
              <li>Terapi Okupasi</li>
              <li>Rehabilitasi Medis/Fisioterapi</li>
              <li>Gizi Klinis </li>
              <li>Rohaniawan.</li>
            </ul>
            <p className="text-justify">
              Seluruh Tim Medis dan Paramedis di Burn Unit RSPP akan memastikan
              layanan terbaik untuk pasien selama menjalani pemulihan hingga
              pasien kembali sehat dan dapat kembali beraktifitas dalam
              kehidupan sehari-hari.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
