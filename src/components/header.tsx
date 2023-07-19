import Link from "next/link";
import { Book } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

function Header() {
  return (
    <header className="m-auto flex max-w-3xl justify-between px-6 py-6 lg:px-0">
      <Link href="/">
        <Book className="h-10 w-10" />
      </Link>
      <nav className="flex items-center">
        <ul className="text-body-sm lg:text-body-md flex items-center space-x-1">
          <li className="mr-3 border-r pr-3">Fonts</li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
