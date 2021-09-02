import React from "react";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1> こんにちは</h1>
      <p> こんにちは</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
