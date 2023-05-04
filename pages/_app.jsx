import "@/styles/globals.css";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgSkyblue } from "@/hooks/useBgSkyblue";

// 共通化したいことなどは_app.jsx
// 各ページ間の共通化をここで行なっている。stateのリフトアップを実現。nextjsに限った話

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgSkyblue();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}
