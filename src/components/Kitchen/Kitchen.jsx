import React, { useEffect, useState } from "react";
import { SiCodechef } from "react-icons/si";
import { getOrders } from "../../firebase/firestore";
import "../../styles/Kitchen.scss";
import ProductsKitchen from "../Kitchen/ProductsKitchen";

const Kitchen = () => {
  // lis of orders
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().onSnapshot((querySnapshot) => {
      const orderList = [];
      querySnapshot.forEach((doc) => {
        orderList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setOrders(orderList);
    });
  }, []);

  // toggle to see menu
  const [seeMenu, setSeeMenu] = useState({
    id: null,
    clicked: false,
  });

  return (
    <>
      <div className="kitchen__tittle">
        <h1>Orden</h1>
        <span>
          <SiCodechef />
        </span>
      </div>

      {orders.map((order) => (
        <div className="kitchen__view" key={order.id}>
          <div className="left-column">
            <p>
              Inicio:{" "}
              {order["date_init"].toDate().toLocaleDateString("es", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <p>Fin </p>
            <p>Mesa: {order.table}</p>
          </div>
          <button
            onClick={() => {
              setSeeMenu({ id: order.id, clicked: !seeMenu.clicked });
            }}
          >
            Ver menú
          </button>
          <table className="middle-menu">
            <>
              <p>{order.products.length}</p>
              <div
                className={
                  seeMenu.clicked && seeMenu.id === order.id
                    ? ""
                    : "ocultarMenu"
                }
              >
                <ProductsKitchen
                  orderData={order.products}
                  orderId={order.id}
                />
              </div>
            </>
          </table>
          <input className="right-checkbox" type="checkbox" />
        </div>
      ))}
    </>
  );
};

export default Kitchen;
