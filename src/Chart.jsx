import React from "react";

const Cart = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    fetch("https://dummyjson.com/carts/1")
      .then(res => res.json())
      .then(data => {
        const total = data.products.reduce((sum, item) => {
          return sum + item.price;
        }, 0);
        console.log("TOTAL:", total);
        setItems(total);
      });
  };

  

  return <h2>Total Price: {items}</h2>; // ❌ BUG
};

export default Cart;
