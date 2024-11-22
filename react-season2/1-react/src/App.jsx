import ProductPage from "./pages/ProductPage/index";
import OrderPage from "./pages/OrderPage/index";
import CartPage from "./pages/CartPage";
import * as MyRouter from "./lib/MyRouter";
import { getComponentName}  from "./lib/utils.js";
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

// export default App;

// 고차 컴포넌트 활용 예시 코드
import React from "react";

class Header extends React.Component {
  render() {
    return <header>Header</header>;
  }
}

class Button extends React.Component {
  handleClick = () => {
    this.props.log("클릭");
  }

  render() {
    return <button onClick={this.handleClick}>버튼</button>;
  }
}
// 고차 컴포넌트
const withLogging = (WrappedComponent) => {
  function log(message) {
    console.log(`[${getComponentName(WrappedComponent)}] ${message}`);
  }

  class WithLogging extends React.Component {
    render() {
      const enhancedProps = {
        log,
      };
      return <WrappedComponent {...this.props} {...enhancedProps} />;
    }

    componentDidMount() {
      log("마운트");
    }
  }

  return WithLogging;
}

const EnhancedHeader = withLogging(Header);
const EnhancedButton = withLogging(Button);

export default () => (
  <>
    <EnhancedHeader />
    <EnhancedButton />
  </>
);