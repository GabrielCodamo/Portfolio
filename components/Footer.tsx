import FooterHidden from "@/components/Footerhidden";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full flex-col gap-2 sm:flex-row py-3.5 shrink-0 items-center px-4 md:px-6 bg-zinc-800">
      <div className="flex w-full items-center">
        <div className="flex justify-center sm:ml-20 w-full">
          <FooterHidden className="sm:hidden flex" />
          <p className="text-sm hidden sm:flex text-[#f9f9f9] dark:text-[#f9f9f9]">
            © {new Date().getFullYear()} Gabriel de Paula. All rights reserved.
          </p>
        </div>
        <FooterHidden className="hidden sm:flex" />
      </div>
    </footer>
  )
}