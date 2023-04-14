import React from "react";
import {
  akupuntur,
  anak,
  andrologi,
  bedah,
  bedah1,
  bedah_plastik,
  bedah_saraf,
  btkv,
  gigi,
  gizi,
  hd,
  igd,
  jalan1,
  jalan2,
  jalan3,
  jalan4,
  jalan5,
  jalan6,
  jantung,
  kesehatan_jiwa,
  kulit,
  mata,
  obgyn,
  okupasi,
  ortoped,
  paru,
  pdalam,
  saraf,
  tht,
  urologi,
} from "@/public/assets";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="md:px-24 px-8">
        <div>
          <div className="flex justify-center bg-hijau">
            <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
              Alur Rawat Jalan
            </h1>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-2 pt-4">
            <div
              className=" bg-white border-r-[1px] border-b-[1px] md:border-b-0 border-gray-200
        hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer"
            >
              <Image src={jalan1} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2 pb-8">
                <p className="text-center text-gray-700">
                  Pasien ambil nomor antrian pada mesin antrian dan lakukan
                  registrasi di bagian pendaftaran{" "}
                </p>
              </div>
            </div>

            <div
              className=" bg-white md:border-r-[1px] border-b-[1px] md:border-b-0 border-gray-200
hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer"
            >
              <Image src={jalan2} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2">
                <p className="text-center text-gray-700 dark:text-gray-400">
                  Lakukan pembayaran di kasir. Untuk Pasien Jaminan lakukan
                  verifikasi penjamin terlebih dahulu.
                </p>
              </div>
            </div>
            <div
              className=" bg-white border-r-[1px] border-gray-200 border-b-[1px] md:border-b-0
hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer"
            >
              <Image src={jalan3} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2">
                <p className="text-center text-gray-700">
                  Pasien melakukan Assesment Awal di poliklinik sebelum
                  konsultasi dengan dokter.
                </p>
              </div>
            </div>
            <div
              className=" bg-white md:border-r-[1px] border-gray-200 border-b-[1px] md:border-b-0
hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer"
            >
              <Image src={jalan4} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2">
                <p className="text-center text-gray-700">
                  Pasien menunggu waktu panggilan dokter untuk konsultasi.
                </p>
              </div>
            </div>

            <div className=" bg-white border-r-[1px] border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer">
              <Image src={jalan5} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2">
                <p className="text-center text-gray-700">
                  Pasien melakukan konsultasi kesehatan dengan dokter
                </p>
              </div>
            </div>

            <div className=" bg-white md:border-r-[1px] border-gray-200 hover:bg-blue-100 hover:ease-in hover:duration-500 hover:delay-300 hover:cursor-pointer">
              <Image src={jalan6} alt="JaLan" className="aspect-auto p-2" />
              <div className="px-2">
                <p className="text-center text-gray-700">
                  Pasien menebus resep obat yang telah di anjurkan oleh dokter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center py-8">
            <h1 className="py-4 text-3xl leading-7 tracking-widest font-bold text-judul">
              Rawat Jalan
            </h1>
          </div>

          <div className="space-y-4">
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={akupuntur}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Akupuntur</h5>
                <p className="font-normal text-gray-700">
                  Didalam mendukung unit layanan lain, unit akupunktur kami
                  mengaplikasikan beragam metode dan teknik, termasuk
                  Ultrapuncture dengan menggunakan bantuan alat ultrasound untuk
                  menghilangkan rasa sakit, Cosmetic acupuncture (kosmetik),
                  Management of obesity (problem kegendutan), Infertility
                  (kemandulan), Degrenerative diseases (akibat proses penuaan).
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col bg-white border w-full border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={anak}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Kesehatan Anak
                </h5>
                <p className="font-normal text-gray-700">
                  Pancaran kasih sayang dan kelembutan nan bersahaja dari para
                  ahli medis dan perawatan kami akan senantiasa membias pada
                  setiap pengangan yang kami berikan pada buah hati Anda. Kami
                  juga dilengkapi dengan On site Ultrasonografi yang di desain
                  khusus untuk anak.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={andrologi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Andrologi</h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={btkv}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Jantung, Thorax dan Pembuluh Darah
                </h5>
                <p className="font-normal text-gray-700">
                  Penatalaksanaan ketidaknormalan pada vascular saat ini sangat
                  berkembang, dengan ditunjang laboratorium vascular non
                  invasive. Sekian banyak Pasien kami telah terbukti sukses
                  menjalani pembedahan vascular dan dalam waktu dekat RSPP akan
                  segera membuka layanan Bedah Bypass Jantung.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={bedah_plastik}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Plastik
                </h5>
                <p className="font-normal text-gray-700">
                  Kami menolong pasien-pasien dari berbagai usia dengan masalah
                  kalainan bawaan lahir, kerusakan anggota tubuh akibat
                  kecelakaan, luka bakar dan bagi siapa saja yang menginginkan
                  penampilan estetis lebih baik. Bedah plastik juga kami lakukan
                  bila diperlukan pengembalian proporsi tubuh yang normal untuk
                  memperbaiki penampilan, rasa percaya diri dan meningkatkan
                  fungsi secara fisiologis.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={bedah_saraf}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Saraf
                </h5>
                <p className="font-normal text-gray-700">
                  Rumah Sakit kami memiliki pakar-pakar dengan reputasi sangat
                  baik untuk menangani pembedahan pada trauma kepala, tulang
                  belakang, tumor atau kelainan-kelainan pad system persyarafan,
                  dan memiliki perpaduan yang luar biasa antara reputasi para
                  pakar dan perlatan medis yang mutakhir seperti microsurgery,
                  perwatan laser dan neuro endoscopy.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={ortoped}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Tulang (Orthopaedi & Traumatologi)
                </h5>
                <p className="font-normal text-gray-700">
                  Mempertahankan, mengembalikan dan memperbaiki fungsi system
                  musculoskeletal / rangka dan pergerakan tubuh. Layanan
                  unggulan di klinik kami adalah 3 O'Clinic (Osteoarthritis,
                  Osteoporosis & Obesitas); Klinik Traumatologi & Pertolongan
                  Emergensi; Minimally Invasive Spinal Surgery; Micro Surgery;
                  Arthroscopic Surgery; Arthroplasty.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={bedah1}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Tumor (Onkologi)
                </h5>
                <p className="font-normal text-gray-700">
                  Kanker adalah penyakit yang dapat berakibat fatal bila tidak
                  tertangani dengan baik. Dengan deteksi dini dan penanganan
                  tepat sepertiga kasus kanker dapat diobati. Pasien selayaknya
                  didampingi pada masa-masa sulit melawan penyakit kanker yang
                  diderita, begitupun kami mengupayakan hal terbaik dari
                  pengobatan dan perawatan komprehensif kami.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={bedah}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Umum
                </h5>
                <p className="font-normal text-gray-700">
                  Dalam bidang bedah umum kami menerapkan teknik pembedahan
                  invasive minimal seperti laparoscopic melalui suatu sayatan
                  kecil pada dinding perut colesistektomi laparoscopy dengan
                  teknologi ini proses penyembuhan dan perawatan rumah sakit
                  yang lama hanya akan tinggal menjadi kenangan.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={urologi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Bedah Urologi
                </h5>
                <p className="font-normal text-gray-700">
                  Dibagian urologi kami menangani ribuan kasus batu ginjal
                  setiap tahunnya. Diantaranya beragam metode pengobatan
                  mutakhir kami memiliki teknik penghancur bantu ginjal dengan
                  gelombang kejut atau ESWL dan Holmium YAG Laser. Teknik
                  pengobatan tanpa pisau bedah ini menghasilkan batas aman yang
                  lebih luas, sehingga rasa nyeri minimal serta pemulihan yang
                  cepat.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={gigi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Instalasi Gigi & Mulut
                </h5>
                <p className="font-normal text-gray-700">
                  Masalah lain yang sering kami tangani adalah gangguan gigi dan
                  mulut untuk anak dan dewasa, dan apapun masalah kesehatan gigi
                  & mulut Anda, Kami memberikan solusi sempurna bagi Anda.
                  Sentuhan terampil dari para ahli kami akan membuat Anda nyaman
                  serta mengembalikan senyum ceria dan rasa percaya diri Anda.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={gizi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Gizi</h5>
                <p className="font-normal text-gray-700">
                  Ahli gizi yang handal dan berpengalaman siap membantu Anda
                  serta seluruh anggota keluarga Anda melalui berbagai
                  program-program diet yang harus Anda jalankan untuk kesehatan,
                  baik untuk mendapatkan berat badan proporsional, meningkatkan
                  asupan nutrisi pada penyakit-penyakit seperti penyakit akibat
                  penuaan, hipertensi, penyakit jantung atau penyakit-penyakit
                  akibat gangguan metabolisme seperti diabetes dan gangguan
                  keseimbangan lipid.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={kesehatan_jiwa}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Kesehatan Jiwa
                </h5>
                <p className="font-normal text-gray-700">
                  Kami memberikan konsultasi maupun terapi kejiwaan pada Pasien
                  di segala usia, konseling pra nikah dan terapi Pasien dengan
                  penyalahgunaan obat. Beberapa tes profil kepribadian
                  terkinipun tersedia untuk pengembangan pribadi maupun karier
                  yang lebih baik. Layanan klinik ini dapat melakukan
                  pemeriksaan daya fungsi otak, salah satunya perlu dilakukan
                  pada para pekerja yang sibuk dan memiliki stressor yang
                  tinggi. Sedangkan pemeriksaan profil kepribadian dilakukan
                  terutama untuk para calon pekerja dari berbagai tingkatan
                  (dari buruh kasar sampai eksekutif).
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={jantung}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Jantung & Pembuluh Darah
                </h5>
                <p className="font-normal text-gray-700">
                  Penata laksanaan diagnosis penyakit-penyakit pembuluh darah
                  juga telah mengalami kemajuan besar dengan adanya laboratorium
                  vasculer non infasif. Berpijak dari hasil-hasil pemeriksaan
                  ini telah sekian banyak pasien yang sukses menjalani operasi
                  lintas jantung koroner dan penggantian katup jantung. Seiring
                  dengan meningkatnya insiden penyakit jantung dewasa ini maka
                  kebutuhan sarana diagnosis non infasif yang akurat dibagian
                  kardiologi sangat mutlak diperlukan. Untuk anda tersedia tes
                  pembebanan jantung atau treadmill test, abpm, ambulatory blood
                  pressure monitoring yang merekam data-data tekanan darah
                  selama jangka waktu tertentu dalam angka dan grafik. Holter
                  monitoring yang memantau irama jantung dalam rekaman EKG
                  selama 24 sampai 28 jam. Dan teknologi terkini Echocardiografi
                  3 dimensi. Para dokter ahli kamipun melakukan
                  tindakan-tindakan infasif seperti kateterisasi jantung
                  pelebaran pembuluh darah coroner dengan metode balon dan
                  pemasangan sten.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={obgyn}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Kebidanan & Kandungan
                </h5>
                <p className="font-normal text-gray-700">
                  Dengan fasilitas dan teknologi modern, dokter ahli
                  berkualitas, perawat dan petugas yang penuh perhatian,
                  dilengkapi dengan meja periksa ginekologi, USG 4 dimensi,
                  Kolposkopi dan lain-lain, dijamin melahirka buah hati di rumah
                  sakit kami akan menjadi pengalaman yang sangat indah dalam
                  hidup Anda.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={kulit}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Kulit & Kelamin
                </h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={mata}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Mata</h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={paru}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Paru</h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={pdalam}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Penyakit Dalam
                </h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={saraf}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">Saraf</h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={tht}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  THT (Telinga Hidung Tenggorokan)
                </h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={okupasi}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Kedokteran Kerja (Okupasi)
                </h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={igd}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Instalasi Gawat Darurat
                </h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
                </p>
              </div>
            </div>
            <div className="flex bg-white border w-full border-gray-200 rounded-lg md:flex-row flex-col hover:bg-gray-100 hover:cursor-pointer">
              <Image
                className="h-48 p-4 w-auto object-cover aspect-video"
                src={hd}
                alt=""
              />
              <div className=" p-4 space-y-2">
                <h5 className="text-2xl font-semibold text-judul">
                  Hemodialisa
                </h5>
                <p className="font-normal text-gray-700">
                  Bagian Andrologi kami memberikan layanan khusus untuk pasangan
                  yang mengalami masalah 'infertilitas', disfungsi seksual,
                  kelambatan perkembangan pada alat kemaluan, serta pemberian
                  konseling pra nikah dan andropause. Ahli andrologi kami akan
                  membantu masalah anda dengan perhatian dan empati mendalam.
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
