import { useRouter } from "next/router";

const ProductDetail = () => {
  const { query } = useRouter();

  return <div>detail id = {query.id}</div>;
};

export default ProductDetail;
