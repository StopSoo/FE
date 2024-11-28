import Card from "../../components/Card";

const OrderDeliveryCard = ({ order }) => {
  const { deliveryAddress, deliveryContact, messageToShop, messageToRider } =
    order;

  return (
    <Card
      data={[
        { term: "배달 주소", description: deliveryAddress },
        { term: "전화번호", description: deliveryContact },
        { term: "가게 사장님께", description: messageToShop },
        { term: "라이더님께", description: messageToRider },
      ]}
    />
  );
};

export default OrderDeliveryCard;
