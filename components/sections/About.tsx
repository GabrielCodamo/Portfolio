import { Card } from "@/components/ui/card";

import { PiStudentBold } from "react-icons/pi";
import { LuFolderCode } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";
import perfilSobremim from "/assets/PerfilAbout.png"
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="w-full pt-30 pb-73 lg:pt-27 lg:pb-45">
      <div className="flex items-center justify-center text-center ">
        <div className="w-80">
          <Separator className="my-4" />
        </div>
        <motion.h2
          className="text-3xl text-shadow-amber-950 text-shadow-lg/30 font-bold flex items-center justify-center p-4 text-center tracking-tighter sm:text-5xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Sobre Mim
        </motion.h2>
        <div className="w-80">
          <Separator className="my-4" />
        </div>
      </div>
      <div className="flex w-full justify-center space-x-8 items-end ">
        <motion.div className="lg:flex hidden "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}>
          <Image src={perfilSobremim}
            alt="imagem da seção sobre mim"
            className="w-77 h-77 shadow-xl/30  border border-amber-950 rounded-full" />
        </motion.div>
        <div className="flex flex-col items-center justify-end w-[600px] space-y-4 mt-10">
          <div className="flex sm:inline sm:w-full w-74">
            <motion.p
              className="font-[500] sm:w-155 text-lg text-shadow-amber-950 text-shadow-lg/30"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}>
              Sou um desenvolvedor Web em formação apesar de não ter experiência formal como desenvolvedor tenho focado em estudar, aprimorar e aplicar meus conhecimentos na prática com a confecção de mini projetos pessoais que auxiliam no meu desenvolvimento responsivo, otimização de performance e melhores práticas de UX/UI.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.20, delay: 3 * 0.1 }}>
              <Card className="flex py-4 px-5 border-2 bg-transparent shadow-xl/20 border-transparent">
                <FaCode className="w-8 h-8 text-[#f9f9f9]" />
                <span className="font-extrabold text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30">Linguagens</span>
                <p className="text-[#f9f9f9] font-bold text-sm text-shadow-amber-950 text-shadow-lg/30">HTML, CSS, Javascript e React.js.</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.20, delay: 4 * 0.1 }}>
              <Card className="flex py-4 px-5 border-2 bg-transparent shadow-xl/20 border-transparent">
                <PiStudentBold className="w-8 h-8 text-[#f9f9f9]" />
                <span className="font-extrabold text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30">Educação</span>
                <p className="text-[#f9f9f9] font-bold text-sm text-shadow-amber-950 text-shadow-lg/30">Ensino Superior Imcompleto</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.20, delay: 5 * 0.1 }}>
              <Card className="flex py-4 px-5 border-2 bg-transparent shadow-xl/20 border-transparent">
                <LuFolderCode className="w-8 h-8 text-[#f9f9f9]" />
                <span className="font-extrabold text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30">Mini Projetos</span>
                <p className="text-[#f9f9f9] font-bold text-sm text-shadow-amber-950 text-shadow-lg/30">3 Projetos criados usando JavaScript</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}