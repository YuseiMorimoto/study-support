import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

// useMemoはメモ化された値を返す
// useCallbackはメモ化された”関数”を返す。

// useEffectの処理
export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "skyblue";
      }
      case "/about": {
        return "purple";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  // マウント時の処理
  useEffect(() => {
    // routerのパスが変わるたびに変更が加えられる処理を実行させている。
    document.body.style.backgroundColor = bgColor;

    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
