import { useCallback, useState } from "react";

// カウントに関する処理。
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

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

  return { count, isShow, handleClick, handleDisplay };
};
