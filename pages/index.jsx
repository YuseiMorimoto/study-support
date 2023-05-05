import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  // 前の状態を用いた処理をしたいときには
  // setStateの中は関数で書く
  // 必ず関数を利用する必要はない。

  return (
    <div>
      <Header />
      {props.isShow ? <h1 className="text-center">{props.count}</h1> : null}
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
      <Main page="index" />;
    </div>
  );
};
export default Home;
