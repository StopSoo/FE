import ProductPage from "./pages/ProductPage/index";
import OrderPage from "./pages/OrderPage/index";
import CartPage from "./pages/CartPage";
import createEvenEmitter from "shared/lib/EventEmitter";

const App = () => {
  return (
    <>
      {/* <ProductPage /> */}
      {/* <OrderPage /> */}
      <CartPage />
    </>
  );
};

export default App;

// 이벤트 에미터
// const eventEmitter = createEvenEmitter(0);
// const logger = (value) => console.log(value);

// eventEmitter.on(logger);
// console.log(eventEmitter.get());  // 0
// eventEmitter.set(1);  // 1
// eventEmitter.set(2);  // 2

// setTimeout(() => eventEmitter.set(10), 3000); // 비동기 동작도 가능.

// 1) ref 객체를 통해 DOM에 직접 접근 가능.
// 2) ref를 어떤 태그에 전달하느냐에 따라 ref객체의 속성이 달라짐.
// import React from 'react';

// class MyComponent extends React.Component {
//   divRef = React.createRef();

//   render() {
//     return <div ref={this.divRef}>div</div>;
//   }

//   componentDidMount() {
//     // 실제 DOM에 있는 div element 값이 컴포넌트 마운트 후 current에 들어와 있음을 확인 가능.
//     console.log(this.divRef);

//     const divElement = this.divRef.current;
//     divElement.style.backgroundColor = "red";
//     divElement.style.width = "100px";
//     divElement.style.height = "100px";
//   }
// }

// export default MyComponent;