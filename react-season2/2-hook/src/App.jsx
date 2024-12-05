import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import * as MyRouter from "./lib/MyRouter";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path="/" element={<ProductPage />} />
      <MyRouter.Route path="/cart" element={<CartPage />} />
      <MyRouter.Route path="/order" element={<OrderPage />} />
    </MyRouter.Routes>
  </MyRouter.Router>
  // <>
  //   <ProductPage />
  // </>
);

export default App;
