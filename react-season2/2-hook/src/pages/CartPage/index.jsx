import ProductApi from "shared/api/ProductApi";
import OrderApi from "shared/api/OrderApi";
import PaymentButton from "../../../../2-hook/src/pages/CartPage/PaymentButton";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";

const CartPage = () => {
  const [product, setProduct] = useState();

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
  useEffect(() => {
    fetch("CACDA421"); // 일단 고정된 ID 값을 저장
  }, []);

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
