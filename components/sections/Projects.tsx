import { ProjectCard } from "../project-card";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";
// import CarouselMobile from "@/components/Carouselmobile";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/app/globals.css';

import { Pagination, Autoplay } from 'swiper/modules';

// import { CarouselItem } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  imageUrl: number
}

const ProjectCardData: ProjectCardProps[] = [
  {
    title: "Lista de Tarefas",
    description: "Uma aplicação simples de lista de tarefas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lista-de-tarefas-gabrielcodamos-projects.vercel.app/",
    githubUrl: "https://github.com/GabrielCodamo/Lista-de-Tarefas",
    imageUrl: 1,
  },
  {
    title: "Tela de Login e Cadastro",
    description: "Uma aplicação de login e cadastro usando banco de dados.",
    tags: ["React.js", "Next.js", "Shadcn-UI", "Tailwind", "Next-Auth", "Prisma", "MongoDB"],
    demoUrl: "https://loginnext-gabrielcodamos-projects.vercel.app",
    githubUrl: "https://github.com/GabrielCodamo/loginnext",
    imageUrl: 2
  },
  {
    title: "Portfolio Website",
    description: "Meu portfolio criado com next.js e tailwindcss.",
    tags: ["React", "Next.js", "Tailwind", "Shadcn-UI", "Framer Motion", "Zod", "React Hook Form"],
    imageUrl: 3,
    demoUrl: "#",
    githubUrl: "https://github.com/GabrielCodamo/Portfolio"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-15 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center text-center">
          <div className="w-80">
            <Separator className="my-4" />
          </div>
          <motion.h2
            className="text-3xl p-4 text-shadow-amber-950 text-shadow-lg/30 font-bold flex items-center justify-center  text-center tracking-tighter sm:text-5xl"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Meus Projetos
          </motion.h2>
          <div className="w-80">
            <Separator className="my-4" />
          </div>
        </div>
        <div className=" w-full max-w-5xl grid grid-cols-1 sm:py-3 ">
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {
              ProjectCardData.map((data, index) => (
                <ProjectCard
                  key={index}
                  className="hidden sm:flex"
                  title={data.title}
                  description={data.description}
                  tags={data.tags}
                  demoUrl={data.demoUrl}
                  githubUrl={data.githubUrl}
                  imageUrl={data.imageUrl}
                />
              ))
            }
          </motion.div>
          <div className="flex w-full justify-center sm:hidden ">
            {/* <CarouselMobile>
              {ProjectCardData.map((data, index) => (
                <CarouselItem key={index} className="">
                  <div className="grid grid-cols-1 py-3">
                    <ProjectCard
                      className="flex sm:hidden"
                      title={data.title}
                      tags={data.tags}
                      description={data.description}
                      demoUrl={data.demoUrl}
                      githubUrl={data.githubUrl}
                      imageUrl={data.imageUrl}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselMobile> */}
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper "
            >{ProjectCardData.map((data, index) => (
              <SwiperSlide key={index} className="" >
                <div className="grid grid-cols-1 py-3">
                  <ProjectCard
                    className="flex sm:hidden "
                    title={data.title}
                    tags={data.tags}
                    description={data.description}
                    demoUrl={data.demoUrl}
                    githubUrl={data.githubUrl}
                    imageUrl={data.imageUrl}
                  />
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  )
}