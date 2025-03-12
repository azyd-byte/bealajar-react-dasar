import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    console.info("Handle Click");
    setLoad(true);
  }

  useEffect(() => {
    console.info("call use effect with []");
  }, []);

  useEffect(() => {
    if (load) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [load]);
  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Product</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
