"use client";

import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import TopQualityCare from "@/components/TopQualityCare";
import Betwen from "@/components/Betwen";
import FeaturedClinics from "@/components/FeaturedClinics";
import Howwork from "@/components/Howwork";

export default function HomePage() {
  const router = useRouter();

  const handleSearch = (specialty: string, location: string) => {
    const params = new URLSearchParams();
    if (specialty) params.set("specialty", specialty);
    if (location) params.set("location", location);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      <div className="min-h-screen bg-cream-50">
        <Hero onSearch={handleSearch} />
      </div>
      <Betwen />
      <TopQualityCare />
      <Betwen />
      <FeaturedClinics />
      <Betwen />
      <Howwork />
      <Betwen />
    </>
  );
}