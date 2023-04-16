import React from "react";
import Berita from "@/components/Berita";
import Dokter from "@/components/Dokter";
import HeroSection from "@/components/HeroSection";
import Pencapaian from "@/components/Pencapaian";

const page = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <HeroSection />
      {/* @ts-expect-error Server Component */}
      <Dokter />
      {/* @ts-expect-error Server Component */}
      <Berita />
      <Pencapaian />
    </div>
  );
};

export default page;
