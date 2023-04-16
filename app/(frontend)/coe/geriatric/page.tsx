import { geriatri } from "@/public/assets";
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
            <Image src={geriatri} alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-justify">
              Pasien geriatri adalah pasien lanjut usia dengan multi penyakit
              dan/atau gangguan akibat penurunan fungsi organ, psikologi,
              sosial, ekonomi dan lingkungan yang membutuhkan pelayanan
              kesehatan secara terpadu dengan pendekatan multidisiplin yang
              bekerja secara interdisiplin.
            </p>

            <p className="text-justify">
              Pelayanan Terpadu Geriatri RSPP memberikan layanan aspek kesehatan
              dan kedokteran pada warga lanjut usia yang telah mencapai usia 60
              (enam puluh) tahun ke atas dengan mengkaji semua aspek kesehatan
              berupa promosi, pencegahan, diagnosis, pengobatan, dan
              rehabilitasi serta asuhan keperawatan dalam suasana dan atmosfer
              pelayanan klinis yang mendukung pasien dengan usia lanjut yang
              dapat dilakukan secara maksimal dalam satu waktu dan lokasi,
              sehingga pasien lansia bisa mendapatkan keefektifan kunjungan
              klinis dengan lebih optimal.
            </p>

            <p>Tim pendukung:</p>

            <ul className="list-decimal mx-14">
              <li>Penyakit Dalam</li>
              <li>Kedokteran Fisik dan Rehabilitasi</li>
              <li>Kedokteran Jiwa/Psikiater</li>
              <li>Gizi Klinik dan tim</li>
              <li>lainnya sesuai dengan jenis penyakit pasien geriatri</li>
              <li>Dokter Umum</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
