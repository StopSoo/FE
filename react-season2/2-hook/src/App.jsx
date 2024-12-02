import React, { useState } from "react";
import MyReact from "./lib/MyReact";
// const App = () => <>2-hook</>;
// export default App;

const Counter = () => {
  const [count, setCount] = useState(0);
  // useEffect()를 사용함으로써 아무리 무거운 부수효과라도 렌더링 후 실행되는 것을 보장.
  MyReact.useEffect(() => {
    document.title = `count: ${count}`; // DOM API 직접 호출 -> 늦은 렌더링을 발생시킴
    console.log("effect 1");
  })

  const handleClick = () => setCount(count + 1);

  console.log("Counter rendered");
  return <button onClick={handleClick}>더하기</button>;
};

export default Counter;