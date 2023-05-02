import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    // alert(123);
  });

  return (
    <div>
      <Header />
      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>
      <Main page="index" />;
    </div>
  );
}
