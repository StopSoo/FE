import React from "react";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import ProductApi from "shared/api/ProductApi";
import * as MyRouter from "../../lib/MyRouter";

class CartPage extends React.Component {
  constructor(props) {
    // handleSubmit은 비동기로 동작해야 하기 때문에, constructor를 통해 this를 고정시킴.
    super(props);

    this.state = { product: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetch() {
    const { productId } = this.props.params();

    try {
      const product = await ProductApi.fetchProduct(productId);
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    this.fetch();
  }
  // 콜백 함수: OrderForm을 통해 전달 받은 주문 정보를 가져옴.
  handleSubmit(values) {
    console.log(values);
    // 주문하기 페이지로 이동
    this.props.navigate("/order");
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

export default MyRouter.withRouter(CartPage);
