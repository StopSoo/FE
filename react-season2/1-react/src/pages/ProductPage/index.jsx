import React from "react";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import ProductApi from "shared/api/ProductApi"; // workspace
// 상태 관리를 위해 class 컴포넌트로 구현
class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }
  // data fetching 함수
  async fetch() {
    try {
      const productList = await ProductApi.fetchProductList();
      this.setState({ productList });
    } catch (e) {
      console.error(e);
    }
  }
  // 컴포넌트가 mount되었을 때만 fetch 함수를 실행
  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴 목록</Title>} footer={<NavBar />}>
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default ProductPage;