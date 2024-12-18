import React from "react";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import ProductApi from "shared/api/ProductApi";
import OrderApi from "shared/api/OrderApi";
import * as MyRouter from "../../lib/MyRouter";
import * as MyLayout from "../../lib/MyLayout";
import ErrorDialog from "../../components/ErrorDialog";
import Dialog from "../../components/Dialog";
import PaymentSuccessDialog from "./PaymentSuccessDialog";

class CartPage extends React.Component {
  constructor(props) {
    // handleSubmit은 비동기로 동작해야 하기 때문에, constructor를 통해 this를 고정시킴.
    super(props);

    this.state = { product: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetch() {
    const { params, startLoading, finishLoading, openDialog } = this.props;
    const { productId } = params();

    startLoading("장바구니에 담는 중 ...");
    try {
      const product = await ProductApi.fetchProduct(productId);
      this.setState({ product });
      // throw "fake error";
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  }

  async componentDidMount() {
    this.fetch();
  }
  // 콜백 함수: OrderForm을 통해 전달 받은 주문 정보를 가져옴.
  async handleSubmit(values) {
    const { startLoading, finishLoading, openDialog } = this.props;
    startLoading('결제 중 ...');
    // api 호출
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
    openDialog(<PaymentSuccessDialog />);
    // this.props.navigate("/order");  // 주문하기 페이지로 이동
  }

  render() {
    const { product } = this.state;

    return (
      <div className="CartPage">
        <Page
          header={<Title backUrl={"/"}>장바구니</Title>}
          footer={<PaymentButton />}
        >
          {product && <ProductItem product={product} />}
          <OrderForm onSubmit={this.handleSubmit} />
        </Page>
      </div>
    );
  }
}

export default MyLayout.withLayout(MyRouter.withRouter(CartPage));
