import ProductItem from "../../components/ProductItem";
import * as MyRouter from "../../lib/MyRouter";
// MyRouter.withRouter라는 고차 컴포넌트를 이용해 코드를 더욱 간소화시킴
const OrderableProductItem = ({ product, navigate }) => {
      const handleClick = () => {
        // 장바구니 페이지로 이동
        navigate('/cart');
      };
      return <ProductItem product={product} onClick={handleClick} />;
  };

export default MyRouter.withRouter(OrderableProductItem);
