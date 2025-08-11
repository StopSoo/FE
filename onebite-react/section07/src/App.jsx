import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  // useState의 set 함수는 비동기로 동작.
  const [count, setCount] = useState(0);

  // useEffect = callback 함수 + 의존성 배열
  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);

  const onChangeCount = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onChangeCount={onChangeCount} />
      </section>
    </div>
  );
}

export default App;
