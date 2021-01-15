import React from 'react';
import '../../components/../styles/Order.scss';


const Order = ({id, product}) =>{
  console.log(id);
  return (
    <aside className = "order__container">
      <h2>Nueva orden</h2>
      <form action="">
        <div>
        <label htmlFor="">Cliente:</label>
        <input 
        placeholder="ingrese nombre"
        type="text"/>
      </div>
      
      <div>
        <label htmlFor="">Mesa: </label>        
        <input 
        placeholder = "mesa"
        type="text"/>
      </div>

      </form>
      <p>Cliente: </p>
      <p>Mesa: {id}</p>
      <div>
        <p>Total: {product}</p>
      </div>
      <button> Enviar</button>
    </aside>
  )
};

  export default Order;