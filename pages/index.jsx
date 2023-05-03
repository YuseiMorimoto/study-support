import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    // alert(123);
  });

  // マウント時の処理
  useEffect(() => {
    console.log("マウント時");

    // アンマウント時
    return () => {
      console.log("アンマウント時");
    };
  }, []);

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
