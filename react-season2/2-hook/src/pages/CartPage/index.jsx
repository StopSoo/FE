import ProductApi from "shared/api/ProductApi";
import OrderApi from "shared/api/OrderApi";
import PaymentButton from "./PaymentButton";
import PaymentSuccessDialog from "./PaymentSuccessDialog"
import Page from "../../components/Page";
import ErrorDialog from "../../components/ErrorDialog";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import React from "react";
import OrderForm from "./OrderForm";
import * as MyRouter from "../../lib/MyRouter";
import * as MyLayout from "../../lib/MyLayout";

const CartPage = () => {
  const [product, setProduct] = React.useState();
  const { productId } = MyRouter.useParams();
  const { openDialog } = MyLayout.useDialog();
  const { startLoading, finishLoading } = MyLayout.useLoading();

  const fetch = async (productId) => {
    startLoading("장바구니에 담는 중 ...");
    try {
      const product = await ProductApi.fetchProduct(productId);
      setProduct(product);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };
  // fetch() 함수는 초기에 한 번만 실행되어야 함 => 의존성 인자로 빈 배열 전달.
  React.useEffect(() => {
    if (!productId) return;

    fetch(productId);
  }, [productId]);

  const handleSubmit = async (values) => {
    startLoading("결제 중 ...");

    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      finishLoading();
      openDialog(<ErrorDialog />);
      return;
    }

    finishLoading();
    openDialog(<PaymentSuccessDialog />);
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
