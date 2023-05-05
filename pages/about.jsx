import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

const About = (props) => {
  // カスタムフックはreturn文よりも前、トップレベルで呼び出す必要がある。ルールを確認する
  // コンポーネントよりもUIの自由度が高い。

  return (
    <div>
      <Header />
      {props.isShow ? (
        <h1 className="text-center">{props.doubleCount}</h1>
      ) : null}
      <button className="content-center" onClick={props.handleClick}>
        ボタン
      </button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />;
    </div>
  );
};
export default About;
