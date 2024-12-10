import { useEffect, useState } from "react";
import ProductApi from "shared/api/ProductApi";
import Title from "../../components/Title";
import Page from "../../components/Page";
import Navbar from "../../components/NavBar";
import OrderableProductItem from "./OrderableProductItem";
import ErrorDialog from "../../components/ErrorDialog";
import * as MyLayout from "../../lib/MyLayout";

const ProductPage = () => {
  const [productList, setProductList] = useState([]);
  const { openDialog } = MyLayout.useDialog();
  const { startLoading, finishLoading } = MyLayout.useLoading();

  const fetch = async () => {
    startLoading("메뉴 목록 로딩 중 ...");
    try {
      const productList = await ProductApi.fetchProductList();
      setProductList(productList);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };
  // fetch() 함수는 초기에 한 번만 실행되어야 함 => 의존성 인자로 빈 배열 전달.
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="ProductPage">
      <Page header={<Title>메뉴 목록</Title>} footer={<Navbar />}>
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              <OrderableProductItem product={product} />
            </li>
          ))}
        </ul>
      </Page>
    </div>
  );
};

export default ProductPage;
