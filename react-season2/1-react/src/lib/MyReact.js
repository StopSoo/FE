import React from "react";
import createEventEmitter from "shared/lib/EventEmitter";
// context를 만드는 createContext 함수를 제공하는 모듈
const MyReact = (function () {
  function createContext(initialValue) {
    const emitter = createEventEmitter(initialValue);
    // value 값이 변경될 때 Consumer에게 알림
    class Provider extends React.Component {
      componentDidMount() {
        emitter.set(this.props.value);
      }

      componentDidUpdate() {
        emitter.set(this.props.value);
      }

      render() {
        return <>{this.props.children}</>;
      }
    }
    // emitter가 전달한 값을 소비하는 역할
    class Consumer extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          value: emitter.get(),
        };
        this.setValue = this.setValue.bind(this); // 비동기 작업이므로 this 바인딩
      }

      setValue(nextValue) {
        this.setState({ value: nextValue });
      }

      componentDidMount() {
        // 이벤트 에미터의 구독 함수로 전달
        emitter.on(this.setValue);
      }

      componentWillUnmount() {
        // 이벤트 에미터의 구독 해지
        emitter.off(this.setValue);
      }

      render() {
        return <>{this.props.children(this.state.value)}</>;
      }
    }
    // context = Provider와 Consumer로 이루어진 객체
    return { Provider, Consumer };
  }

  return { createContext };
})();

export default MyReact;
