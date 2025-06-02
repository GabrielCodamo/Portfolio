import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="flex justify-center ww-full flex-col gap-2 sm:flex-row py-4 shrink-0 items-center px-4 md:px-6 bg-zinc-800">
      <div className="flex w-full items-center">
        <div className="flex justify-center ml-20 w-full">
          <p className="text-sm text-[#f9f9f9] dark:text-[#f9f9f9]">
            © {new Date().getFullYear()} Gabriel de Paula. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link href="https://github.com/GabrielCodamo" className="text-muted-foreground hover:text-orange-400" target="_blank" rel="noreferrer">
            <FiGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-de-paula-274a0421b/" className="text-muted-foreground hover:text-orange-400" target="_blank" rel="noreferrer">
            <SlSocialLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new" className="text-muted-foreground hover:text-orange-400">
            <CiMail className="h-6 w-6 mt-1" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}