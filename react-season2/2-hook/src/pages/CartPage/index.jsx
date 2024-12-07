import ProductApi from "shared/api/ProductApi";
import OrderApi from "shared/api/OrderApi";
import PaymentButton from "../../../../2-hook/src/pages/CartPage/PaymentButton";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import React from "react";
import OrderForm from "./OrderForm";
import * as MyRouter from "../../lib/MyRouter";

const CartPage = () => {
  const [product, setProduct] = React.useState();
  const { productId } = MyRouter.useParams();

  const fetch = async (productId) => {
    try {
      const product = await ProductApi.fetchProduct(productId);
      setProduct(product);
    } catch (e) {
      // openDialog(<ErrorDialog />);
      return;
    }
  };
  // fetch() 함수는 초기에 한 번만 실행되어야 함 => 의존성 인자로 빈 배열 전달.
  React.useEffect(() => {
    if (!productId) return;

    fetch(productId);
  }, [productId]);

  const handleSubmit = async (values) => {
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      return;
    }
  };

  return (
    <div className="CartPage">
      <Page
        header={<Title backUrl={"/"}>장바구니</Title>}
        footer={<PaymentButton />}
      >
        {product && <ProductItem product={product} />}
        <OrderForm onSubmit={handleSubmit} />
      </Page>
    </div>
  );
};

export default CartPage;
