import React from 'react';
import '../../components/../styles/Order.scss';
import { BsTrashFill } from "react-icons/bs";
import { GoDiffAdded,GoDiffRemoved } from "react-icons/go";


const Order = ({cards, deleteProduct}) =>{
  //console.log(cards);
  return (
    <aside className = "order__container">
      <form>
      <fieldset>
      <legend className='style_header_orden'>Nueva orden</legend>
      <div className='mesa__container'>
        <label className='style_header_orden'>Mesa: </label>        
        <input className='mesa'
        placeholder = "mesa"
        type="text"/>
      </div>      
      <div className='client__container'>
        <label className='style_header_orden'>Cliente: </label>
        <input className='client'
        placeholder="ingrese nombre"
        type="text"/>
      </div>
      
      {
        cards.length > 0 ?
        cards.map((card)=>(
        <div className="listOrden" key = {card.id}>
          
          <div className="product__andNote">
          <p className='productSelect'>{card.Product}</p>
          <input className='specialNote'  placeholder="nota especial" value = {card.note} type="text"/>
          </div>
          <div className='count'>
            <span><GoDiffRemoved/></span>
            <label ></label>
            <input  className='number' value = {card.quantity} type="text"/> 
            <span><GoDiffAdded/></span>
          </div>
          <p className='price'>{card.quantity * card.Cost}</p>
          <span className='trash' onClick = {()=> {deleteProduct(card.id)}}><BsTrashFill/></span> 
        </div>  
        )) : (
          <h4>No hay productos seleccionados</h4>
        )
      }
        <hr className='line'></hr>
        <div className='total__container'>
          <p className='total'>Total</p>
          <p  className='costTotal'>0.00</p>
        </div>
        
      </fieldset>
       <button className='buttonSend'>ENVIAR</button>
      </form>
      {/* <h2>Nueva orden</h2>
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
      <p>Mesa: {cards.id}</p>
      <div>
        <p>Total: </p>
      </div>
      <button> Enviar</button> */}
    </aside>
  )
};

  export default Order;