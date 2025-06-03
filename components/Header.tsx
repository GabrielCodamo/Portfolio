"use cilent"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from 'framer-motion'

import { useState } from "react"
import Dropdown from "@/components/Dropdown";

interface NavItem {
  title: string
  href: string
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "#"
  },
  {
    title: "Sobre",
    href: "#about",
  },
  {
    title: "Habilidades",
    href: "#skills",
  },
  {
    title: "Projetos",
    href: "#projects",
  },
  {
    title: "Contato",
    href: "#contact",
  }
]


export default function Header() {
  const [activeItem, setActiveItem] = useState<string>("Home")
  return (
    <div className="fixed w-full  ">
      <header className=" px-4 lg:px-6 h-14 flex items-center justify-center bg-zinc-800 ">
        <motion.header
          className="fixed top-0 w-full px-4 lg:px-6 h-14 flex items-center justify-center "
          initial={{ top: -100 }}
          animate={{ top: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full flex justify-between">
            <Link href="#" className="flex items-center cursor-pointer justify-center"
            >
              <span className="font-bold text-xl text-orange-500">Gabriel</span>
            </Link>
            <Dropdown />
          </div>
          <nav className="ml-auto h-full hidden sm:flex gap-4 sm:gap-6 items-center justify-center border-orange-500">
            <div className="flex flex-1 items-center justify-end space-x-2 md:justify-center md:space-x-4">
              {navItems.map((item) => (
                <Link className={cn(
                  "relative px-3 py-2 font-medium transition-colors ",
                  activeItem === item.title ? "rounded-full text-orange-500 " : "text-[#f9f9f9]",
                )}
                  key={item.title}
                  href={item.href}
                  onClick={() => setActiveItem(item.title)}
                >
                  {item.title}
                  {activeItem === item.title && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500 " />}
                </Link>
              ))}
            </div>
          </nav>
        </motion.header>
      </header>
    </div >
  )
}