import React from "react";
import Image from "next/image";
import { surgery } from "@/public/assets";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div className="flex justify-center py-8">
          <h1 className="py-4 text-3xl leading-7 uppercase tracking-widest font-bold text-judul">
            Minimal Invasive Surgery
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:space-x-4 md:space-y-0 space-y-4">
          <div className="">
            <Image src={surgery} alt="" />
          </div>
          <div className="space-y-4">
            <p className="text-justify">
              Bedah minimal invasif adalah suatu prosedur pembedahan baik untuk
              diagnostik maupun tindakan terapi terhadap suatu penyakit yang
              dilakukan melalui sayatan luka kecil, sehingga akses luka yang
              kecil dan prosedur yang dilakukan memiliki hasil klinis yang lebih
              baik berupa nyeri yang minimal, komplikasi lebih sedikit, dan
              pasien lebih cepat dalam proses pemulihannya oleh karena
              memberikan luka yang minimal pada organ tubuh yang dituju.
            </p>
            <p className="text-justify">Layanan yang diberikan:</p>
            <ul className="list-decimal mx-14">
              <li>Operasi Usus Buntu</li>
              <li>Operasi pengangkatan Batu Empedu</li>
              <li>Operasi hernia</li>
              <li>Biopsi tumor intra-Abdomen</li>
              <li>Pengambilan tumor Usus Besar</li>
              <li>
                Pemasangan akses untuk cuci darah lewat perut (CAPD: Continuous
                Ambulatory Peritoneal Dialysis)
              </li>
              <li>Reseksi Hati</li>
              <li>Arthroscopy: sendi bahu, lutut, pergelangan kaki</li>
              <li>Reseksi tumor Paru, Mediastinum</li>
              <li>Operasi menutup kebocoran Paru</li>
              <li>Membebaskan perlengketan Paru</li>
              <li>Operasi patah tulang Iga</li>
              <li>Pleurodesis</li>
              <li>Biopsi tumor daerah rongga dada</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
