import React from "react";

const MyReact = (function MyReact() {
  const memorizedStates = []; // 현재 변수에 저장된 값
  const isInitialized = []; // 변수 초기화 여부
  let cursor = 0; // 현재 변수의 인덱스
  // 상태 관리 & 값 변경 시 화면 리렌더링
  function useState(initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true; 
    }

    const state = memorizedStates[cursor];  // 현재 state가 가지는 값
    // cursor가 아닌, closer로 캡쳐된 _cursor를 사용.
    const setStateAt = (_cursor) => (nextState) => {
      if (state === nextState) return;
      
      memorizedStates[_cursor] = nextState;
      forceUpdate(); // 컴포넌트 리렌더링
    };
    
    const setState = setStateAt(cursor);
    cursor = cursor + 1; 
    return [state, setState];
  }
  // React의 useState()를 활용해 컴포넌트가 강제 리렌더링되도록 구현
  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor = 0; // 컴포넌트 리렌더링과 함께 cursor 초기화
    }

    return { forceUpdate };
  }
  // effct: 부수 효과
  function useEffect(effect) {
    function runDeferredEffect() {
      const ENOUGH_TIME_TO_RENDER = 1;
      setTimeout(effect, ENOUGH_TIME_TO_RENDER);
    }

    runDeferredEffect();
  }
  return { useState, useEffect };
})();

export default MyReact;
