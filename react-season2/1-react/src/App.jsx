import ProductPage from "./pages/ProductPage/index";
import OrderPage from "./pages/OrderPage/index";
import CartPage from "./pages/CartPage";
import createEventEmitter from "shared/lib/EventEmitter";
import * as MyRouter from "./lib/MyRouter";
// Context를 사용하려면 Provider로 감싸야 하고, Consumer는 Provider로 감싸야 한다(!)
// Provider: Router | Consumer: Routes
const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path="/cart" element={<CartPage />} />
      <MyRouter.Route path="/order" element={<OrderPage />} />
      <MyRouter.Route path="/" element={<ProductPage />} />
    </MyRouter.Routes>
  </MyRouter.Router>
);

export default App;

// 이벤트 에미터
// const eventEmitter = createEvenEmitter(0);
// const logger = (value) => console.log(value);

// eventEmitter.on(logger);
// console.log(eventEmitter.get());  // 0
// eventEmitter.set(1);  // 1
// eventEmitter.set(2);  // 2

// setTimeout(() => eventEmitter.set(10), 3000); // 비동기 동작도 가능.

import React from "react";
import MyReact from "./lib/MyReact";

const countContext = MyReact.createContext({
  count: 0,
  setCount: () => {},
});
// provider
class CountProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    const value = {
      count: this.state.count,
      setCount: (nextValue) => this.setState({ count: nextValue }),
    };

    return (
      <countContext.Provider value={value}>
        {this.props.children}
      </countContext.Provider>
    );
  }
}
// consumer
const Count = () => {
  return (
    <countContext.Consumer>
      {(value) => <div>{value.count}</div>}
    </countContext.Consumer>
  );
};

const PlusButton = () => {
  return (
    <countContext.Consumer>
      {(value) => (
        <button onClick={() => value.setCount(value.count + 1)}>
          + 카운트 올리기
        </button>
      )}
    </countContext.Consumer>
  );
};

// export default () => (
//   <CountProvider>
//     <Count />
//     <PlusButton />
//   </CountProvider>
// );
