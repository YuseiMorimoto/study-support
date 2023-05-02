import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <div className="">
      <header className="">
        <Link href="/" className="border-b-2 border-slate-800 ">
          Index
        </Link>

        <Link href="/about">About</Link>
      </header>
    </div>
  );
}
