import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgSkyblue } from "@/hooks/useBgSkyblue";

const inter = Inter({ subsets: ["latin"] });

export default function About(props) {
  // カスタムフックはreturn文よりも前、トップレベルで呼び出す必要がある。ルールを確認する
  // コンポーネントよりもUIの自由度が高い。
  const {
    doubleCount,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <div>
      <Header />
      {isShow ? <h1 className="text-center">{doubleCount}</h1> : null}
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
      <Main page="about" />;
    </div>
  );
}
