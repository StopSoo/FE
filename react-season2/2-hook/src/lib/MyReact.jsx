import React from "react";
// 다중 상태를 처리할 수 있도록 리팩토링
const MyReact = (function MyReact() {
  let memorizedStates = []; // 현재 변수에 저장된 값
  let isInitialized = []; // 변수 초기화 여부

  function useState(cursor, initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true; 
    }

    const state = memorizedStates[cursor];  // 현재 state가 가지는 값

    const setState = (nextState) => {
      if (state === nextState) return;
      memorizedStates[cursor] = nextState;
      forceUpdate(); // 컴포넌트 리렌더링
    };

    return [state, setState];
  }
  // useState()를 활용해 컴포넌트가 강제 리렌더링되도록 구현
  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => setValue(value + 1);

    return { forceUpdate };
  }

  return { useState };
})();

export default MyReact;
