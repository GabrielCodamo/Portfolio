import { TiThMenuOutline } from "react-icons/ti";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
export default function Dropdown() {
  return (
    <div className="flex sm:hidden ">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger> <TiThMenuOutline className="text-2xl  hover:cursor-pointer text-[#FF6900]" /> </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="bg-gradient-to-r from-amber-950 via-orange-500 to-amber-950
           flex flex-col border-none">
            <DropdownMenuLabel className="text-[#f9f9f9]">Sections</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="#">
              <DropdownMenuItem className="text-[#f9f9f9] hover:cursor-pointer hover:bg-none ">Home</DropdownMenuItem>
            </Link>
            <Link href="#about">
              <DropdownMenuItem className="text-[#f9f9f9] hover:cursor-pointer">Sobre</DropdownMenuItem>
            </Link>
            <Link href="#skills">
              <DropdownMenuItem className="text-[#f9f9f9] hover:cursor-pointer">Habilidades</DropdownMenuItem>
            </Link>
            <Link href="#projects">
              <DropdownMenuItem className="text-[#f9f9f9] hover:cursor-pointer">Projetos</DropdownMenuItem>
            </Link>
            <Link href="#contact">
              <DropdownMenuItem className="text-[#f9f9f9] hover:cursor-pointer">Contato</DropdownMenuItem>
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}