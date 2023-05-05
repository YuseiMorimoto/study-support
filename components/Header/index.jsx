import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className="">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
