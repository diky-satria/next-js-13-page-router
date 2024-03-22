import { useRouter } from "next/router";

const Price2 = () => {
  const { query } = useRouter();

  return <div>price 2 = {query.price}</div>;
};

export default Price2;
