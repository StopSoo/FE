import React, { useState } from "react";
import MyReact from "./lib/MyReact";
// const App = () => <>2-hook</>;
// export default App;

const Counter = () => {
  MyReact.resetCursor(); // 컴포넌트 렌더링과 동시에 커서를 초기화

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => setCount(count + 1);

  const handleChangeName = (e) => setName(e.target.value);

  // useEffect()를 사용함으로써 아무리 무거운 부수효과라도 렌더링 후 실행되는 것을 보장.
  MyReact.useEffect(() => {
    document.title = `count: ${count} / name: ${name}`; // DOM API 직접 호출 -> 느린 렌더링.
    console.log("effect 1");

    return function cleanup() {
      document.title = ""; // 원래대로 바꿔놓을 목적
      console.log("effect 1 cleanup");
    };
  }, [count, name]);

  MyReact.useEffect(() => {
    localStorage.setItem("name", name);
    console.log("effect 2");
  }, [name]);
  // 초기에 한 번만 실행되도록 하기 위해, 의존성 인자로 빈 배열을 전달.
  MyReact.useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);

  return (
    <>
      <button onClick={handleClick}>더하기</button>
      <input value={name} onChange={handleChangeName} />
    </>
  );
};

export default () => {
  const [mounted, setMounted] = useState(false);

  const handleToggle = () => {
    const nextMounted = !mounted;
    
    if (!nextMounted) MyReact.cleanupEffects();
    setMounted(nextMounted);
  }

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      {mounted && <Counter />}
    </>
  );
};
