import Button from "../../components/Button";
import Card from "../../components/Card";

const OrderStatusCard = ({ order }) => {
  const { id, orderDate, status, name } = order;

  return (
    <Card
      header={
        <>
          <strong>{status}</strong>
          <br />
          {name}
        </>
      }
      data={[
        { term: "주문 일시", description: orderDate },
        { term: "주문 번호", description: id },
      ]}
      footer={
        <>
          <Button>전화</Button>
          <Button>가게 보기</Button>
        </>
      }
    />
  );
};

export default OrderStatusCard;
