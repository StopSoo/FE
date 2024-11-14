import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPayment from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard";
// mock data
const fakeOrder = {
  id: "CACDA420",
  orderDate: "2023. 7. 22. 오전 11:24:46",
  status: "배달중",
  name: "짜장면",
  totalPrice: 7000,
  paymentMethod: "마이페이",
  productPrice: 6000,
  deliveryPrice: 3000,
  discountPrice: 2000,
  deliveryAddress: "서울특별시 송파구 잠실동 1번지",
  deliveryContact: "010-1111-2222",
  messageToShop: "포크는 주지 마세요",
  messageToRider: "안전하게 오세요",
  position: [60, 60]
};

const OrderPage = () => {
  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<NavBar />}>
        <OrderStatusCard order={fakeOrder} />
        <OrderPayment order={fakeOrder} />
        <OrderDeliveryCard order={fakeOrder} />
      </Page>
    </div>
  );
}

export default OrderPage;