import React from 'react';
import '../../components/../styles/Order.scss';
import { BsTrashFill } from "react-icons/bs";
import { GoDiffAdded,GoDiffRemoved } from "react-icons/go";
import { useForm } from "react-hook-form";

const Order = ({cards, deleteProduct, increaseProduct, decreaseProduct}) =>{
  
  // sum of products
  const total = cards.reduce((sum, card) => ( sum + card.subtotal ), 0);

  //Validate form
  const{register, errors, handleSubmit} = useForm();

  const onSubmit = (data,e) =>{
    const sendOrder = {
      ...data,
      order : cards,
      total: total,
      date: new Date()
    }
    console.log(sendOrder);
    e.target.reset()
  }

  return (
    <aside className = "order__container">
      <form onSubmit = {handleSubmit(onSubmit)}>
        <fieldset>
        <legend className='style_header_orden'>Nueva orden</legend>
        <div className='client__container'>
          <label className='style_header_orden'>Cliente: </label>
          <input 
          name = "customer"
          className='client'
          placeholder="ingrese nombre"
          type="text"
          ref={
            register({
              required:{value: true, message: "Campo obligatorio"}
            })
          }/>
          <span>{errors.customer && errors.customer.message}</span>
        </div>
        <div className='mesa__container'>
          <label className='style_header_orden'>Mesa: </label>        
          <input 
          name ="table"
          className='mesa'
          placeholder = "mesa"
          type="text"
          ref={
            register({
              required:{value: true, message: "Campo obligatorio"}
            })
          }/>
          <span>{errors.table && errors.table.message}</span>
        </div>      
      
      
      {
        cards.length > 0 ?
        cards.map((card)=>(
        <div className="listOrden" key = {card.id}>
          
          <div className="product__andNote">
          <p className='productSelect'>{card.product}</p>
          <input name = 'specialNote' className='specialNote'  placeholder="nota especial" value = {card.note} type="text"/>
          </div>
          <div className='count'>
            <span onClick = {()=> decreaseProduct(card.id)}><GoDiffRemoved/></span>
            <p  className='price' > {card.quantity} </p> 
            <span onClick = {()=> increaseProduct(card.id)}><GoDiffAdded/></span>
          </div>
          <p className='price'>S/. {card.subtotal = card.quantity * card.cost}</p>
          <span className='trash' onClick = {()=> {deleteProduct(card.id)}}><BsTrashFill/></span> 
        </div>  
        )) : (
          <span>No hay productos seleccionados</span>
        )
        }
        <hr className='line'></hr>
        <div className='total__container'>
          <p className='total'>Total</p>
          <p  className='total'>{total}</p>
        </div>
        
        </fieldset>
       <button className='buttonSend'>ENVIAR</button>
      </form>
    </aside>
  )
};

  export default Order;