import React from "react";

const MyReact = (function MyReact() {
  const memorizedStates = []; // 현재 변수에 저장된 값
  const deps = [];  // useEffect에 넘기는 변수의 의존성
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
  // effect: 부수 효과
  // nextDeps: 다중 의존성 배열
  // 관련된 변수에 대해서만 useEffect()가 동작해야 함
  function useEffect(effect, nextDeps) {
    function runDeferredEffect() {
      const ENOUGH_TIME_TO_RENDER = 1;
      setTimeout(effect, ENOUGH_TIME_TO_RENDER);
    }

    if (!isInitialized[cursor]) {
      isInitialized[cursor] = true;
      deps[cursor] = nextDeps;
      cursor = cursor + 1;  // 다음 변수에 대해 동작하도록 미리 설정
      runDeferredEffect();
      return;
    }
    // 의존성 변경 여부 체크
    const prevDeps = deps[cursor];
    const depsSame = prevDeps.every((prevDep, index) => prevDep === nextDeps[index]); 
    if (depsSame) { // 의존성 변경 X 경우
      cursor = cursor + 1;  // 다음 변수에 대해 동작하도록 미리 설정
      return;
    }

    deps[cursor] = nextDeps;
    cursor = cursor + 1;  // 다음 변수에 대해 동작하도록 미리 설정
    runDeferredEffect();
  }

  function resetCursor() {
    cursor = 0; // 커서를 초기화
  }

  return { useState, useEffect, resetCursor };
})();

export default MyReact;
