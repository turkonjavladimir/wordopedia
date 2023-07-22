import Link from "next/link"
import { Book } from "lucide-react"

import Search from "@/components/search"
import { ThemeToggle } from "@/components/theme-toggle"

function Header() {
  return (
    <header className="m-auto max-w-3xl space-y-7 px-6 py-6 lg:px-0">
      <div className="flex justify-between">
        <Link href="/">
          <Book className="h-10 w-10" />
        </Link>
        <nav className="ml-4 flex items-center">
          <ul className="text-body-sm lg:text-body-md flex items-center space-x-1">
            <li className="mr-3 border-r pr-3">Fonts</li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
      <Search />
    </header>
  )
}

export { Header }
