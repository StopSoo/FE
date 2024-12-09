import NavBar from "../../components/NavBar";
import OrderDeliveryCard from "../../pages/OrderPage/OrderDeliveryCard";
import OrderStatusCard from "../../pages/OrderPage/OrderStatusCard";
import OrderPayment from "../../pages/OrderPage/OrderPaymentCard";
import OrderApi from "shared/api/OrderApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ErrorDialog from "../../components/ErrorDialog";
import React from "react";
import * as MyLayout from "../../lib/MyLayout";

const OrderPage = () => {
  const [order, setOrder] = React.useState();
  const { openDialog } = MyLayout.useDialog();
  const { startLoading, finishLoading } = MyLayout.useLoading();

  const fetch = async () => {
    startLoading("주문 정보 로딩 중 ...");
    try {
      const order = await OrderApi.fetchMyOrder();
      setOrder(order);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };
  // fetch() 함수는 초기에 한 번만 실행되어야 함 => 의존성 인자로 빈 배열 전달.
  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<NavBar />}>
        {order && (
          <>
            <OrderStatusCard order={order} />
            <OrderPayment order={order} />
            <OrderDeliveryCard order={order} />
          </>
        )}
      </Page>
    </div>
  );
};

export default OrderPage;
