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
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    // returnだけの場合は省略できる。
    // !を使うことでtrueとfalseを入れ替えている。
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

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
      {isShow ? <h1 className="text-center">{count}</h1> : null}
      <button className="content-center" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />;
    </div>
  );
}
