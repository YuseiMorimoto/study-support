import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // 前の状態を用いた処理をしたいときには
  // setStateの中は関数で書く
  // 必ず関数を利用する必要はない。
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  // マウント時の処理
  useEffect(() => {
    console.log(`マウント時 ${count}`);

    // アンマウント時
    return () => {
      console.log(`アンマウント時：${count}`);
    };
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-center">{count}</h1>
      <button className="content-center" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />;
    </div>
  );
}
