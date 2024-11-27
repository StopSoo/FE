import React from "react";
import OrderApi from "shared/api/OrderApi";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPayment from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard";
import * as MyLayout from "../../lib/MyLayout";
import ErrorDialog from "../../components/ErrorDialog";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: null,
    };
  }

  async fetch() {
    const { startLoading, finishLoading, openDialog } = this.props;

    startLoading("주문 내역을 불러오는 중 ...");
    try {
      const order = await OrderApi.fetchMyOrder();
      this.setState({ order });
      throw 'fake error';
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  }

  componentDidMount() {
    this.fetch();
  }
  // order 값이 있을 때만 렌더링
  render() {
    const { order } = this.state;
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
  }
}

export default MyLayout.withLayout(OrderPage);
