import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiNextdotjs, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";

import { motion } from "framer-motion";

import typescript from "/assets/typescript.svg"

// import Animation from "@/components/animations/animation-card";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"
import { Separator } from "@/components/ui/separator";

export default function Skills() {
  return (
    <section id="skills" className="w-full pt-15 pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-2 flex justify-center items-center">
            <div className="w-80">
              <Separator className="my-4" />
            </div>
            <motion.h2
              className="text-3xl text-shadow-amber-950 text-shadow-lg/30 font-bold flex items-center justify-center  p-4 text-center tracking-tighter sm:text-5xl"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Habilidades
            </motion.h2>
            <div className="w-80">
              <Separator className="my-4" />
            </div>
          </div>
          <div className="mx-auto w-full grid max-w-5xl items-center gap-6 pb-12 pt-5 grid-cols-5">
            <Card className="bg-red-500/90 border-red-500 shadow-red-500">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 1 * 0.1 }} >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <FaHtml5 className="w-10 h-10 text-red-600/90" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">HTML5</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-blue-800/90 border-blue-800 shadow-blue-800">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center "
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 2 * 0.1 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <FaCss3Alt className="w-10 h-10 text-blue-800/80" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">CSS3</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-amber-400/90 border-amber-400 shadow-amber-400">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center "
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 3 * 0.1 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <IoLogoJavascript className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">JavaScript</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-blue-600 border-blue-600 shadow-blue-600">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center "
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 4 * 0.1 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <Image src={typescript} className="w-9 h-9 " alt="Typescript imagem" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">TypeScript</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-blue-400/90 border-blue-400 shadow-blue-400">
              <CardContent className="p-6">
                 <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 5 * 0.1 }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <FaReact className="w-10 h-10 text-blue-400/80" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">React.js</h3>
               </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-black border-zinc-950 shadow-zinc-950">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 6 * 0.1 }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <SiNextdotjs className="w-9 h-9 text-black" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">Next.js</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-indigo-600/90 border-indigo-600 shadow-indigo-600">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 7 * 0.1 }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <RiTailwindCssFill className="w-8 h-8 text-indigo-600/90" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">Tailwind.css</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-600/90 border-emerald-600 shadow-emerald-600">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 8 * 0.1 }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <FaNodeJs className="w-9 h-9 text-emerald-600/90" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">Node.js</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-cyan-900/90 border-cyan-900 shadow-cyan-900">
              <CardContent className="p-6">
               <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 9 * 0.1 }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <SiPrisma className="w-9 h-9 text-cyan-900/90" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">PrismaORM</h3>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-green-500/90 border-green-500 shadow-green-500">
              <CardContent className="p-6">
               <motion.div
                  className="flex flex-col items-center space-y-1"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, delay: 10 * 0.1 }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f9f9f9]">
                    <SiMongodb className="w-9 h-9 text-green-500/90" />
                  </div>
                  <h3 className="text-xl text-[#f9f9f9] font-bold">MongoDB</h3>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section >
  )
}