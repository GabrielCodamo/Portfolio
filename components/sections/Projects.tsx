import { ProjectCard } from "../project-card";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-15">
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-3 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="w-full "
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ProjectCard
              title="Lista de Tarefas"
              description="Uma aplicação simples de lista de tarefas."
              tags={["HTML", "CSS", "JavaScript"]}
              demoUrl="https://lista-de-tarefas-gabrielcodamos-projects.vercel.app/"
              githubUrl="https://github.com/GabrielCodamo/Lista-de-Tarefas"
              imageUrl={1}
            />
          </motion.div>
          <motion.div
            className="w-full "
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ProjectCard
              title="Tela de Login e Cadastro"
              description="Uma aplicação de login e cadastro usando banco de dados."
              tags={["React.js", "Next.js", "Shadcn-UI", "Tailwind", "Next-Auth", "Prisma", "MongoDB"]}
              imageUrl={2}
              demoUrl="https://loginnext-gabrielcodamos-projects.vercel.app"
              githubUrl="https://github.com/GabrielCodamo/loginnext"
            />
          </motion.div>
          <motion.div
            className="w-full "
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ProjectCard
              title="Portfolio Website"
              description="Meu portfolio criado com next.js e tailwindcss."
              tags={["React", "Next.js", "Tailwind", "Shadcn-UI", "Framer Motion", "Zod", "React Hook Form"]}
              imageUrl={3}
              demoUrl="#"
              githubUrl="https://github.com/GabrielCodamo/Portfolio"
            />
          </motion.div>
        </div>
      </div>
    </section >
  )
}