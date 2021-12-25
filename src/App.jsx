import { useState } from "react";
import { useEffect } from "react";
import { ColorMessage } from "./components/ColorMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  // useEffect(() => {
  //   alert();
  // }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorMessage />
      <ColorMessage color="blue">お元気ですか</ColorMessage>
      <ColorMessage color="pink">元気です</ColorMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
};
