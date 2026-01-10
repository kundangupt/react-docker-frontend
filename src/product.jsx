import React from "react";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    console.log("API CALLED");

    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  },); // ❌ NO dependency array

  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <h2>Total Products: {products.length}</h2>
    </div>
  );
};

export default Products;
