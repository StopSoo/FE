import ProductItem from "../../components/ProductItem";
import * as MyRouter from "../../lib/MyRouter";

const OrderableProductItem = ({ product }) => (
  <MyRouter.routerContext.Consumer>
    {({ changePath }) => {
      const handleClick = () => {
        // 장바구니 페이지로 이동
        changePath('/cart');
      };

      return <ProductItem product={product} onClick={handleClick} />;
    }}
  </MyRouter.routerContext.Consumer>
);

export default OrderableProductItem;
