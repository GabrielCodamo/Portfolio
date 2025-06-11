import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { FiGithub } from "react-icons/fi";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import { twMerge } from "tailwind-merge";

interface ProjectCardProps {
  title: string
  description?: string
  tags: string[]
  imageUrl: number
  demoUrl: string
  githubUrl: string
  className?: string
}

export function ProjectCard({ title, description, tags, imageUrl, demoUrl, githubUrl, className }: ProjectCardProps) {
  return (
    <Card className={twMerge(" overflow-hidden bg-transparent inset-shadow-sm inset-shadow-zinc-800 shadow-xl/30  border-transparent pt-2", className)}>
      <div className=" w-full h-50 sm:h-full rounded-b-md justify-center flex ">
        <Image
          src={`/Projeto${imageUrl}.png`}
          alt={title}
          className="flex px-2 sm:w-120 sm:h-73 sm:px-0 h-45.5 w-77 sm:rounded-2xl lg:h-50 lg:w-77 "
          height={600}
          width={600}
        />
      </div>
      <div className="flex flex-col gap-2">
        <CardHeader>
          <CardTitle className="text-[#f9f9f9] font-semibold text-shadow-amber-950 text-shadow-lg/30 flex justify-center sm:justify-start ">{title}</CardTitle>
          <CardDescription className="text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30 font-sans" >{description}</CardDescription>
        </CardHeader>
        <div className="flex flex-col gap-6 ">
          <CardContent>
            <div className={imageUrl === 1 ? "flex flex-wrap gap-2 sm:pb-6.5 sm:pt-6 pt-3" : "flex flex-wrap gap-2 sm:pb-6.5 sm:pt-6 lg:pt-0 lg:pb-0 "}>
              {
                tags.map((tag) => (
                  <Badge key={tag} className="bg-[#f9f9f9] text-gray-700 hidden sm:flex" >
                    {tag}
                  </Badge>
                ))}
            </div>
          </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={demoUrl} rel="noopener noreferrer">
                <Button className="cursor-pointer text-gray-700 hover:border-orange-600 hover:text-[#f9f9f9] hover:bg-amber-600" variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </Link>
              <Link href={githubUrl} rel="noopener noreferrer">
                <Button className="cursor-pointer text-gray-700 hover:border-orange-600 hover:text-[#f9f9f9] hover:bg-amber-600" variant="outline" size="sm">
                  <FiGithub className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </Link>
            </CardFooter>
        </div>
      </div>
    </Card>
  )
}
