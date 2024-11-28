import React from "react";

const MyReact = (function MyReact() {
  let memorizedState; // 현재 변수에 저장된 값
  let isInitialized = false; // 변수 초기화 여부

  function useState(initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized) {
      memorizedState = initialValue;
      isInitialized = true; // 변수에 저장된 값은 계속 유지됨
    }

    const setState = (value) => {
      if (memorizedState === value) return;
      memorizedState = value;
      forceUpdate(); // 컴포넌트 리렌더링
    };

    return [memorizedState, setState];
  }

  function useForceUpdate() {
    // useState()를 활용해 강제 리렌더링 구현
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => setValue(value + 1);
    return { forceUpdate };
  }

  return { useState };
})();

export default MyReact;
