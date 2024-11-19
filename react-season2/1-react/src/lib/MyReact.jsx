import createEvenEmitter from "shared/lib/EventEmitter";
// context를 만드는 createContext 함수를 제공하는 모듈
const MyReact = (function () {
  function createContext(initialValue) {
    const emitter = createEvenEmitter(initialValue);
    // 일단 children을 띄우는 역할
    const Provider = ({ value, children }) => <>{children}</>;
    // emitter가 전달한 값을 소비하는 역할
    const Consumer = ({ children }) => <>{children(emitter.get())}</>;
    // context = Provider와 Consumer로 이루어진 객체
    return { Provider, Consumer };
  }

  return { createContext };
})();

export default MyReact;
