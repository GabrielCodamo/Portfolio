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
    <section className=" flex flex-col lg:flex-row justify-center lg:pt-47 pt-25 pb-35 w-full ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="origin-center"
      >
        <div className="flex items-center justify-center lg:hidden">
          <Image
            src={imagemportifolio}
            alt="Profile"
            className="inset-shadow-[#f9f9f9] bg-[#f9f9f9b0] inset-shadow-sm shadow-xl/30 shadow-[#f9f9f9] rounded-full w-60 h-60 "
            priority
          />
        </div>
      </motion.div>
      <div className="lg:grid lg:grid-cols-[1fr_300px] gap-20">
        <motion.div
          className="w-full lg:grid lg:max-w-[683px] "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center lg:block space-y-4">
            <div className="flex flex-col w-70 sm:w-full lg:block sm:space-y-2 justify-center items-center">
              <h1 className=" justify-center text-3xl text-gray-950 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Olá, Sou o <span className="text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30">Gabriel <span className="hidden sm:inline">de Paula</span></span>
              </h1>
              <p className="hidden sm:flex text-[#f9f9f9] text-lg font-bold max-w-135 mt-3 ml-2 " >
                Sou um desenvolvedor web apaixonado por criar interfaces intuitivas e visualmente atraentes. Gosto de desenvolver minhas aplicações usando as tecnologias HTML, CSS e JavaScript utilizando o Next.js.
              </p>
              <p className="flex sm:hidden text-[#f9f9f9] text-lg font-bold max-w-135 mt-3 ml-2 " >
                Sou um desenvolvedor web apaixonado por criar interfaces intuitivas e visualmente atraentes.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <div className="sm:flex gap-2 min-[400px]:flex-row hidden">
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
              <div className="flex gap-4 mt-4 lg:ml-1">
                <Link href="https://github.com/GabrielCodamo" target="_blank" rel="noreferrer">
                  <Button className="cursor-pointer rounded-full hover:bg-amber-600 hover:text-[#f9f9f9] bg-transparent border-1  hover:border-1 hover:border-orange-800" variant="ghost" size="icon">
                    <FiGithub className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-de-paula-274a0421b/" target="_blank" rel="noreferrer">
                  <Button className="cursor-pointer rounded-full hover:bg-amber-600 bg-transparent border-1  hover:border-1 hover:border-orange-800 hover:text-[#f9f9f9]" size="icon">
                    <SlSocialLinkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new" target="_blank" rel="noreferrer">
                  <Button className="cursor-pointer rounded-full hover:bg-amber-600 bg-transparent border-1  hover:border-1 hover:border-orange-800 hover:text-[#f9f9f9]" variant="ghost" size="icon">
                    <CiMail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="origin-center"
        >
          <div className=" items-center justify-center hidden lg:flex">
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

