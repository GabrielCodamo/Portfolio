"use client"

import Header from "@/components/Header";
import SectionHome from "@/components/sections/Home";
import SectionAbout from "@/components/sections/About";
import SectionProjects from "@/components/sections/Projects";
import SectionSkills from "@/components/sections/Skills";
import SectionContact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-amber-950 via-orange-500 to-amber-950">
      <Header />
      <div className="flex-1">
        <SectionHome />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects/>
        <SectionContact/>
      </div>
      <Footer />
    </div>
  );
}
