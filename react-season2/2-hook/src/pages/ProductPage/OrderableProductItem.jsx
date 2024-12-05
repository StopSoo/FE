import ProductItem from "../../components/ProductItem";
import { useNavigate } from "../../lib/MyRouter";

const OrderableProductItem = ({ product }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/cart?productId=${product.id}`);
  };
  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductItem;
