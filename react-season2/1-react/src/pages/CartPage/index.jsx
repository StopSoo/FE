import React from "react";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import ProductApi from "shared/api/ProductApi";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  async fetch() {
    try {
      const product = await ProductApi.fetchProduct("CACDA421"); // id를 동적으로 받아야 함
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    this.fetch();
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
          <OrderForm />
        </Page>
      </div>
    );
  }
}

export default CartPage;
