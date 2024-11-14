import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Title from "../../components/Title";

const OrderPage = () => {
  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<NavBar />}>
        <Card />
      </Page>
    </div>
  );
}

export default OrderPage;