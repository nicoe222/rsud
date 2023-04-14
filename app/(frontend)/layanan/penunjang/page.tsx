import Image from "next/image";
import React from "react";
import {
  anatomi,
  cancer_center,
  catering,
  patklin,
  radiologi,
  rehab,
} from "@/public/assets";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div className="">
          <div className="flex justify-center">
            <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
              Layanan Penunjang Medis
            </h1>
          </div>

          <div className="space-y-4">
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={patklin}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Laboratorium Patologi Klinik
                </h5>
                <p className="font-normal text-gray-700">
                  Laboratorium Patologi Klinik RS. Pusat Pertamina sudah berdiri
                  sejak tahun 1972, yang dikelola oleh analis-analis
                  berpengalaman dan dokter Spesialis Patologi Klinik yang full
                  timer dan terakreditasi penuh. Fasilitas yang tersedia adalah
                  Layanan Cito 24 jam, Mikrobiologi, Serologi, Imunologi,
                  Hematologi dan Bank Darah dengan layanan 24 jam.
                  Pemeriksaan-pemeriksaan ditunjang dengan teknologi mutakhir
                  dan menggunakan metode-metode baru. Melakukan Quality Control
                  Internal dan Eksternal (Internasional) sehingga mendapatkan
                  hasil yang akurat.Proses administrasi ditunjang dengan LIS
                  (Laboratory Information System) untuk proses permintaan,
                  penerimaan, analisis spesimen maupun dalam pencetakan dan
                  pengiriman hasil sehingga ketelitian terjamin. Laboratorium
                  Patologi Klinik RSPP melayani permintaan pemeriksaan dan
                  konsultasi untuk pasien umum.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={anatomi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Laboratorium Patologi Anatomi
                </h5>
                <p className="font-normal text-gray-700">
                  Didukung oleh bermacam fasilitas canggih, laboratorium anatomi
                  fisiologi kami melakukan berbagai analisa specimen seperti :
                  histopatologi, cytopatologi, histochemistry dan
                  immunoperoxydation staining.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={radiologi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Radiologi & Radioterapi
                </h5>
                <p className="font-normal text-gray-700">
                  Instalasi Radiologi merupakan salah satu instalasi penunjang
                  medis yang memberikan layanan pemeriksaan radiologi dengan
                  hasil pemeriksaan berupa foto/ gambar untuk membantu dokter
                  yang merawat Pasien dalam penegakan diagnosis. Instalasi
                  Radiologi kami dibawah penanganan para dokter ahli dan teknisi
                  yang berpengalaman, memiliki sarana lengkap yang mampu
                  menunjang kebutuhan diagnostik seluruh bidang spesialistis,
                  kami memiliki perangkat teknologi terkini MRI 1,5 tesla, suatu
                  perkembangan mutakhir tanpa aplikasi sinar X yang menampilkan
                  keunggulan dan akurasi tinggi dalam pencitraan otak tulang
                  belakang, sendi dan jaringan tulang otot. Sedangkan Helical
                  dan Multislice CT Scan, yang kami miliki mampu menyajikan
                  gambaran detail hampir seluruh organ tubuh termasuk pembuluh
                  darah.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={cancer_center}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Kedokteran Nuklir & Teranostik Molekuler
                </h5>
                <p className="font-normal text-gray-700">
                  Instalasi Kedokteran Nuklir & Teranostik Molekuler merupakan
                  salah satu instalasi penunjang medis yang menggunakan energi
                  radiasi terbuka dari inti nuklir untuk menilai fungsi suatu
                  organ, mendiagnosis dan mengobati penyakit. Pemeriksaan
                  Kedokteran Nuklir banyak membantu dalam menunjang diagnosis
                  berbagai penyakit. Diantaranya adanya metastasis kanker di
                  tulang, sisa kanker tiroid, gangguan aliran darah otot jantung
                  dll.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={catering}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Instalasi Gizi & Catering
                </h5>
                <p className="font-normal text-gray-700">
                  Memberikan pelayanan gizi di rumah sakit, untuk memenuhi
                  kebutuhan gizi masyarakat rumah sakit, baik rawat inap maupun
                  rawat jalan, untuk keperluan metabolisme tubuh dan peningkatan
                  kesehatan dalam rangka upaya preventif, kuratif, rehabilitasi
                  dan promotif. Instalasi Gizi juga melayani penyediaan makanan
                  untuk karyawan, makanan penunggu dan out-side catering.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={rehab}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Rehabilitasi Medik
                </h5>
                <p className="font-normal text-gray-700">
                  Rehabilitasi Medik (Rehabilitation Medicine) atau Ilmu
                  Kedokteran Fisik dan Rehabilitasi (IKFR) merupakan bidang
                  kedokteran spesialisasi yang berhubungan dengan diagnosis
                  evaluasi dan pengobatan serta pengelolaan penderita dengan
                  berbagai usia seperti kelainan (Impairment),
                  kecacatan(Disability) serta Handicap fisik dan kognitif yang
                  menggunakan pendekatan Holistik dan menyeluruh serta bertujuan
                  tercapainya kemampuan fungsional yang maksimal, baik fisik,
                  psikososial, sosial, okupasional dan vokasional.
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
