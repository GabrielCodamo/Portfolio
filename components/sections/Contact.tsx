'uuse client'

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { formanimation} from '@/components/animations/formanimations'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import axios from "axios";

import { motion } from "framer-motion"
import { toast } from 'react-hot-toast'

const contactFormSchema = z.object({
  subject: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(600)
})

// É utilizado para pegar o tipo do objeto contactFormSchema
type ContactGenerict = z.infer<typeof contactFormSchema>

export default function Contact() {

  const { register, handleSubmit, formState, reset } = useForm<ContactGenerict>({
    resolver: zodResolver(contactFormSchema)
  })

  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  const onSubmit = async (data: ContactGenerict) => {
    console.log(data)
    try {
      axios.post('/api/contact', {
        data: {
          subject: data.subject,
          email: data.email,
          message: data.message
        }
      })
      toast.success('Mensagem enviada com sucesso!', {
        duration: 3000
      })
      reset()
    } catch {
      toast.error('Erro ao enviar a mensagem, tente novamente mais tarde!', {
        duration: 3000
      })
    }

  }

  return (
    <section id="contact" className=" flex justify-center w-full pt-8 pb-10">
      <div className="flex flex-col justify-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl  text-shadow-amber-950 text-shadow-lg/30"
              {...animProps}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Entre em Contato
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-shadow-lg/30 text-shadow-amber-950 text-[#f9f9f9] sm:text-xl/relaxed md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed "
              {...animProps}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Tem algo em mente ou quer apenas falar comigo? Entre em contato!
            </motion.p>
          </div>
          <div className="mx-auto flex flex-col max-w-5xl w-80">
            <div className="flex flex-col gap-2 ">
              <motion.form className={formState.errors.email && formState.errors.message ? " grid mt-4 h-76 " : "grid mt-4 h-76 gap-2"} 
              onSubmit={handleSubmit(onSubmit)} 
              {...formanimation}
              transition={{ duration: 0.5, delay: 0.2 }}> 
                <div className="flex flex-col gap-1 items-start">
                  {formState.errors.email && (
                    <p className="text-red-950 text-sm ml-1">E-mail inválido</p>
                  )}
                  <Input
                    id="email"
                    type="email"
                    className="flex h-10 w-full bg-[#f9f9f9] font-medium text-[14px] md:text-[14px]  focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-zinc-800/80 text-zinc-800/90 placeholder:text-zinc-800/80"
                    placeholder="Email"
                    {...register("email")}
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  {formState.errors.subject && (
                    <p className="text-red-950 text-sm ml-1">Preencha o campo corretamente</p>
                  )}
                  <Input
                    id="subject"
                    type="text"
                    className="flex h-10 w-full bg-[#f9f9f9] text-[14px] font-medium focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-zinc-800/80 text-zinc-800/90 placeholder:text-zinc-800/80"
                    placeholder="Assunto"
                    {...register("subject")}
                  />
                </div>
                <div className="items-start flex flex-col">
                  {formState.errors.message && (
                    <p className="text-red-950 text-sm ml-1 mb-1">Campo inválido
                    </p>
                  )}
                  <textarea
                    id="message"
                    className="flex min-h-[120px] font-medium text-sm focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-zinc-800/80 text-zinc-800/90 placeholder:text-zinc-800/80 bg-[#f9f9f9] w-full rounded-md border border-input px-3 py-2 ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
                    placeholder="Informe sua mensagem"
                    {...register("message")}
                  />
                </div>
                <div className={!formState.errors.email && !formState.errors.subject && !formState.errors.message ? "flex items-center justify-center mt-2" : "mt-5"}>
                  <Button className="mx-auto cursor-pointer border-none text-[#f9f9f9] hover:bg-orange-600 bg-zinc-800 hover:text-[#f9f9f9] shadow-md hover:shadow-orange-700
                   " variant="outline">
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Enviar Mensagem
                    </span>
                  </Button>
                </div>
              </motion.form>
              {/* {JSON.stringify(output, null, 2)} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}