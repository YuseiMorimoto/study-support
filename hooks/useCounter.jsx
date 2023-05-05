import { useCallback, useMemo, useState } from "react";

// コンポーネント内の処理は全てuseCallbackあるいはuseMemo
// を使っても良い。関数ならuseCallback
// エンジニア自身で再生成させるべきかそうでないかを考えられるように
// 意識づけするためにも全てに使うことはあり。

// カウントに関する処理。
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(
    (e) => {
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

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
