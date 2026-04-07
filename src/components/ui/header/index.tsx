import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`flex items-center justify-between w-full py-4 px-4 md:px-16 ${className}`}
    >
      <Link href="/">
        <p className="text-3xl font-main leading-none font-extrabold cursor-pointer hover:opacity-80 transition-opacity">
          Pageist
        </p>
      </Link>
      <ThemeToggle />
    </header>
  );
};
