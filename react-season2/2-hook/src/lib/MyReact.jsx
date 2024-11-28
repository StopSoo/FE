import { useState } from "react";

const MyReact = (function MyReact() {
  let firstName; // 현재 변수에 저장된 값
  let isInitialized = false; // 변수 초기화 여부

  function useName(initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized) {
      firstName = initialValue;
      isInitialized = true; // 변수에 저장된 값은 계속 유지됨
    }

    const setFirstName = (value) => {
      if (firstName === value) return;
      firstName = value;
      forceUpdate(); // 컴포넌트 리렌더링
    };

    return [firstName, setFirstName];
  }

  function useForceUpdate() {
    // useState()를 활용해 강제 리렌더링 구현
    const [value, setValue] = useState(1);
    const forceUpdate = () => setValue(value + 1);
    return { forceUpdate };
  }

  return { useName };
})();

export default MyReact;
