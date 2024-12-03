import NavBar from "../../components/NavBar";
import OrderDeliveryCard from "../../pages/OrderPage/OrderDeliveryCard";
import OrderStatusCard from "../../pages/OrderPage/OrderStatusCard";
import OrderPayment from "../../pages/OrderPage/OrderPaymentCard";
import OrderApi from "shared/api/OrderApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const [order, setOrder] = useState();

  const fetch = async () => {
    try {
      const order = await OrderApi.fetchMyOrder();
      setOrder(order);
    } catch (e) {
      return;
    }
  };
  // fetch() 함수는 초기에 한 번만 실행되어야 함 => 의존성 인자로 빈 배열 전달.
  useEffect(() => {
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
