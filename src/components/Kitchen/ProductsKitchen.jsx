import React, { useState } from "react";
import { checkChef } from "../../firebase/firestore";

const ProductsKitchen = ({ orderData, orderId }) => {
  // lis of products
  // const [ordersItem, setOrdersItem] = useState(false);

  // //check item
  // const checkItem = (item) => {
  //   setOrdersItem(
  //     ordersItem.map((i) => (i.id === item.id ? { ...i, done: !i.done } : i))
  //   );
  // };

  const checkItem = (orderId, itemId) => {
    // const id = e.target.value;

    const newarr = orderData.map((element) => {
      if (itemId === element.id) {
        element.done = true;
      }
      return element;
    });
    checkChef(orderId, newarr);
  };

  return orderData.map((item) => (
    <tbody key={item.id}>
      <tr>
        <td>{item.quantity}</td>
        <td>
          {item.product}
          {item.note}
        </td>
        <td>
          <input
            type="checkbox"
            name="checkbox"
            onChange={() => checkItem(orderId, item.id)}
          />
        </td>
      </tr>
    </tbody>
  ));
};

export default ProductsKitchen;
