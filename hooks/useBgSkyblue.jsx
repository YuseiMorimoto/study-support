import { useEffect } from "react";

// useEffectの処理
export const useBgSkyblue = () => {
  // マウント時の処理
  useEffect(() => {
    document.body.style.backgroundColor = "skyblue";

    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
