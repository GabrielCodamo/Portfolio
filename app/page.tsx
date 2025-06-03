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
    <div className="flex w-full flex-col bg-gradient-to-r from-amber-950 via-orange-500 to-amber-950 overflow-x-hidden ">
        <Header />
        <SectionHome />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects/>
        <SectionContact/>
        <Footer />
    </div>
  );
}
