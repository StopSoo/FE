import React from "react";
import createEventEmitter from "shared/lib/EventEmitter";

const MyReact = (function MyReact() {
  const memorizedStates = []; // 현재 변수에 저장된 값
  const deps = []; // useEffect에 넘기는 변수의 의존성
  const isInitialized = []; // 변수 초기화 여부
  const cleanups = []; // cleanup 함수들을 모아두는 배열
  let cursor = 0; // 현재 변수의 인덱스
  // 상태 관리 & 값 변경 시 화면 리렌더링
  function useState(initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true;
    }

    const state = memorizedStates[cursor]; // 현재 state가 가지는 값
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
    };

    return { forceUpdate };
  }
  // effect: 부수 효과(콜백 함수)
  // nextDeps: 다중 의존성 배열
  // 관련된 변수에 대해서만 useEffect()가 동작해야 함.
  // 의존성 인자인 nextDeps가 없을 경우, 컴포넌트 리렌더링 시마다 실행됨.
  function useEffect(effect, nextDeps) {
    function runDeferredEffect() {
      function runEffect() {
        const cleanup = effect(); // 콜백 함수를 실행해서 cleanup 함수를 얻어냄.
        if (cleanup) cleanups[cursor] = cleanup;
      }
      const ENOUGH_TIME_TO_RENDER = 1;
      setTimeout(runEffect, ENOUGH_TIME_TO_RENDER);
    }

    if (!isInitialized[cursor]) {
      isInitialized[cursor] = true;
      deps[cursor] = nextDeps;
      cursor = cursor + 1; // 다음 변수에 대해 동작하도록 미리 설정
      runDeferredEffect();
      return;
    }
    // 의존성 변경 여부 체크
    const prevDeps = deps[cursor];
    const depsSame = prevDeps.every(
      // every: 특정 조건을 만족하지 않으면 순회가 중단됨.
      (prevDep, index) => prevDep === nextDeps[index]
    );
    if (depsSame) {
      // 의존성 변경 X 경우
      cursor = cursor + 1; // 다음 변수에 대해 동작하도록 미리 설정
      return;
    }

    deps[cursor] = nextDeps;
    cursor = cursor + 1; // 다음 변수에 대해 동작하도록 미리 설정
    runDeferredEffect();
  }

  function resetCursor() {
    cursor = 0; // 커서를 초기화
  }
  // cleanup 함수를 호출하는 함수
  function cleanupEffects() {
    // forEach: 조건을 만족해도 순회가 중단되지 않음.
    cleanups.forEach((cleanup) => typeof cleanup === "function" && cleanup());
  }

  function createContext(initialValue) {
    const emitter = createEventEmitter(initialValue);
    // value 값이 변경될 때 Consumer에게 알림
    function Provider({ value, children }) {
      // emitter 관련 작업은 부수 효과로 처리
      useEffect(() => {
        emitter.set(value);
      }, [value]);

      return <>{children}</>;
    }
    // Consumer 쪽에서 emitter의 get 함수를 사용할 수 있도록 emitter를 전달
    return { Provider, emitter };
  }
  // context: createContext()를 통해 전달 받은 값
  function useContext(context) {
    const [value, setValue] = React.useState(context.emitter.get());

    React.useEffect(() => {
      // value 변경 시 컴포넌트가 리렌더링될 수 있도록
      context.emitter.on(setValue);
      // 컴포넌트 unmount 시 구독 해지
      return () => context.emitter.off(setValue);
    }, [context]);

    return value;
  }

  return { useState, useEffect, createContext, useContext, resetCursor, cleanupEffects };
})();

export default MyReact;
