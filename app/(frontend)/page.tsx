import React from "react";
import Berita from "@/components/Berita";
import Dokter from "@/components/Dokter";
import Hero from "@/components/Hero";
import Pencapaian from "@/components/Pencapaian";

const page = () => {
  return (
    <div>
      <Hero />
      <Dokter />
      {/* @ts-expect-error Server Component */}
      <Berita />
      <Pencapaian />
    </div>
  );
};

export default page;
