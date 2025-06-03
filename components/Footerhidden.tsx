import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import {twMerge} from "tailwind-merge";

type FooterHiddenProps = {
  className?: string
}

export default function FooterHidden({className}: FooterHiddenProps ) {
  
  return(
     <div className={twMerge("flex gap-4 items-center justify-center",className)}>
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
  )
}