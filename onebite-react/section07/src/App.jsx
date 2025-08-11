import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  // useState의 set 함수는 비동기로 동작.
  const [count, setCount] = useState(0);

  const isMount = useRef(false); // App 컴포넌트의 mount 여부 저장

  // useEffect = callback 함수 + 의존성 배열
  // 라이프사이클: mount - update - unmount
  // 1. mount(탄생): 의존성 배열을 빈 배열로 두면, 컴포넌트가 mount되었을 때만 실행됨.
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. update(변화, 리렌더링): 의존성 배열 자리를 비워두면, 컴포넌트가 update될 때마다 실행됨.
  useEffect(() => { 
    if (!isMount.current) {
      // mount되었을 때는 출력X. update되었을 때만 출력.
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. unmount(죽음)

  const onChangeCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onChangeCount={onChangeCount} />
      </section>
    </div>
  );
}

export default App;
