import React, { useEffect, useState } from "react";
//import ColorfulMessage from "./compornents/ColorfulMessage";
import { ColorfulMessage } from "./compornents/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaceShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  // num変更時の挙動です。
  useEffect(() => {
    if (num > 0) {
      // 3の倍数のとき顔を表示させる。
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchFaceShowFlg}>on/off</button>

      <p>{num}</p>
      {faceShowFlg && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
