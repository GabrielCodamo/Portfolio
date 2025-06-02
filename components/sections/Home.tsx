"use client"
import * as motion from "motion/react-client"

import imagemportifolio from "/assets/Perfil.png"

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";


export default function HomePage() {
  return (
    <section className=" flex justify-center pt-47 pb-35 w-full ">
        <div className="grid grid-cols-[1fr_300px] gap-20">
          <motion.div
            className="w-full grid lg:max-w-[683px] "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 , delay: 0.2 }}
          >
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl text-gray-950 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Olá, Sou o <span className="text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30">Gabriel de Paula</span>
                </h1>
                <p className="text-[#f9f9f9] text-lg font-bold max-w-135 mt-3 ml-2 " >
                  Sou um desenvolvedor web apaixonado por criar interfaces intuitivas e visualmente atraentes. Gosto de desenvolver minhas aplicações usando as tecnologias HTML, CSS e JavaScript utilizando o Next.js.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact" className="">
                  <Button className="bg-zinc-800 transition duration-700 hover:bg-zinc-800 hover:scale-110 cursor-pointer inline-flex h-10 items-center justify-center rounded-full px-8 text-sm font-medium text-primary-foreground shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Entre em Contato
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button className="bg-transparent hover:scale-110 duration-700 hover:bg-transparent cursor-pointer shadow inline-flex h-10 items-center justify-center rounded-full px-8 text-sm font-medium text-primary-foreground transition  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Visualize Meus Projetos
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-2 ml-1">
                <Link href="https://github.com/GabrielCodamo" target="_blank" rel="noreferrer">
                  <Button className="cursor-pointer rounded-full hover:bg-orange-400 hover:text-[#f9f9f9] bg-transparent border-1  hover:border-1 hover:border-orange-500" variant="ghost" size="icon">
                    <FiGithub className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-de-paula-274a0421b/" target="_blank" rel="noreferrer">
                  <Button className="cursor-pointer rounded-full hover:bg-orange-400 bg-transparent border-1  hover:border-1 hover:border-orange-500 hover:text-[#f9f9f9]" size="icon">
                    <SlSocialLinkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new" target="_blank" rel="noreferrer">
                  <Button className="cursor-pointer rounded-full hover:bg-orange-400 bg-transparent border-1  hover:border-1 hover:border-orange-500 hover:text-[#f9f9f9]" variant="ghost" size="icon">
                    <CiMail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 0.5,delay: 0.2 }}
            className="origin-center"
          >
            <div className="flex items-center justify-center">
              <Image
                src={imagemportifolio}
                alt="Profile"
                className="inset-shadow-[#f9f9f9] bg-[#f9f9f9b0] inset-shadow-sm shadow-xl/30 shadow-[#f9f9f9] rounded-full w-75 h-75 "
                priority
              />
            </div>
          </motion.div>
        </div>
    </section >
  )

}

