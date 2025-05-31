import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { FiGithub } from "react-icons/fi";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: number
  demoUrl: string
  githubUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-transparent inset-shadow-sm inset-shadow-zinc-800 shadow-xl/30  border-transparent pt-2">
      <div className=" w-full overflow-hidden rounded-b-md justify-center flex">
        <Image
          src={`/Projeto${imageUrl}.png`}
          alt={title}
          className="rounded-md flex w-77 h-50"
          height={800}
          width={800}
        />
      </div>
      <div className="flex flex-col gap-2">
        <CardHeader>
          <CardTitle className="text-[#f9f9f9] font-semibold text-shadow-amber-950 text-shadow-lg/30">{title}</CardTitle>
          <CardDescription className="text-[#f9f9f9] text-shadow-amber-950 text-shadow-lg/30 font-sans" >{description}</CardDescription>
        </CardHeader>
        <div className="flex flex-col gap-6">
          <CardContent>
            <div className={imageUrl === 1 ? "flex flex-wrap gap-2 pb-6.5 pt-6" : "flex flex-wrap gap-2"}>
              {tags.map((tag) => (
                <Badge key={tag} className="bg-[#f9f9f9] text-gray-700" >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between ">
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
