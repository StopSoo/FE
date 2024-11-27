import React from "react";
import NavBar from "../../components/NavBar";
import * as MyLayout from "../../lib/MyLayout";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductApi from "shared/api/ProductApi"; // workspace
import OrderableProductItem from "./OrderableProductItem";
import ErrorDialog from "../../components/ErrorDialog";
// 상태 관리를 위해 class 컴포넌트로 구현
class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }
  // 컴포넌트가 mount되었을 때만 fetch 함수를 실행
  componentDidMount() {
    this.fetch();
  }
  // data fetching 함수
  async fetch() {
    const { startLoading, finishLoading, openDialog } = this.props;

    startLoading("메뉴 목록 로딩 중 ...");
    try {
      const productList = await ProductApi.fetchProductList();
      this.setState({ productList });
      // throw 'fake error';
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴 목록</Title>} footer={<NavBar />}>
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <OrderableProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default MyLayout.withLayout(ProductPage);
