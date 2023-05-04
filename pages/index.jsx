import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import Link from "next/link";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgSkyblue } from "@/hooks/useBgSkyblue";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // 前の状態を用いた処理をしたいときには
  // setStateの中は関数で書く
  // 必ず関数を利用する必要はない。

  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgSkyblue();

  return (
    <div>
      <Header />
      {isShow ? <h1 className="text-center">{count}</h1> : null}
      <button className="content-center" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />;
    </div>
  );
}
