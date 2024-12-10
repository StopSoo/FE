import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import * as MyRouter from "./lib/MyRouter";
import * as MyLayout from "./lib/MyLayout";

const App = () => (
  <MyLayout.Layout>
    <MyRouter.Router>
      <MyRouter.Routes>
        <MyRouter.Route path="/" element={<ProductPage />} />
        <MyRouter.Route path="/cart" element={<CartPage />} />
        <MyRouter.Route path="/order" element={<OrderPage />} />
      </MyRouter.Routes>
    </MyRouter.Router>
  </MyLayout.Layout>
);

// export default App;

import MyReact from "./lib/MyReact";
import { useState } from "react";

export default () => {
  const ref1 = MyReact.useRef(1);
  const ref2 = MyReact.useRef();
  const [state, setState] = useState(0); // 리렌더링을 위해 추가

  if (state > 2) {
    ref1.current = ref1.current + 1;
  }

  return (
    <>
      <button onClick={() => setState(state + 1)}>
        state 증가 (state: {state})
      </button>
      <div>{ref1.current}</div>
      <input ref={ref2} />
      <button onClick={() => console.log("input value", ref2.current.value)}>
        ref2 값 조회
      </button>
    </>
  );
};
