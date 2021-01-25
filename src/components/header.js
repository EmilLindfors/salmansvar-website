import Link from 'next/link'
//import Image from "next/image"

export default function Header() {
  return (
    <header className="text-gray-700 bg-white border-t border-b body-font">
      <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row max-w-5xl">
        <Link href="/">
          <a aria-label="Salmansvar flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0">
            <div className="container flex justify-center h-12 md:object-left">
              <img src="/logo.png" width="400px" height="100%" className="object-contain" />
            </div>
          </a>
        </Link>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a href="/about" className="mr-5 text-sm font-semibold text-tertiary hover:text-primary">
            About
          </a>
          <a
            href="/work-packages"
            className="mr-5 text-sm font-semibold text-tertiary hover:text-primary"
          >
            Work Packages
          </a>
          <a href="/publications" className="mr-5 text-sm font-semibold text-tertiary hover:text-primary">
            Publications
          </a>
          <a href="#" className="mr-5 text-sm font-semibold text-tertiary hover:text-primary">
            Upcoming Events
          </a>
        </nav>
      </div>
    </header>
  )
}
