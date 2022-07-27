import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  return <div className="page product">Product id : {productId}</div>;
};

export default Product;
