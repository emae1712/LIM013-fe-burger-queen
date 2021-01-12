import React from 'react';
import '../../components/../styles/Order.scss';

const Order = () =>{
  return (
    <aside className = "order__container">
      <h2>Nueva orden</h2>
      <p>Cliente: </p>
      <p>Mesa: </p>
      <div>
        <p>Total: 0</p>
      </div>
      <button> Enviar</button>
    </aside>
  )
};

  export default Order;