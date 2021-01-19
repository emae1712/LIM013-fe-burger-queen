import React, { useState, useEffect } from 'react';
import { GiCoffeeCup, GiHamburger, GiWaterBottle, GiFrenchFries } from "react-icons/gi";
import '../../components/../styles/Menu.scss';
import {getProducts} from "../../firebase/firestore";
import Products from './Products';
import Order from './Order';

const Menu = () =>{
  // Menu categories buttons
  const [category, setCategory] = useState('desayuno' );
  
  // lis of products
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts(category)
    .then((arrayProduct)=>{
      setProducts(arrayProduct);
    })
  }, [category]);

  // select each product and save in an array
  const [cards, setCards] = useState([]);

  //add products in Order component, addProduct is onclick event of each card from Products
  const addProduct = (item)=>{
    // create a copy of product to add more properties
    const product = {
      id: item.id,
      product: item.Product,
      cost: item.Cost,
      quantity: 1,
      subtotal: 0,
      note:""
    }
    //receive an array of each card clicked
    const uno = cards.find((oneCard)=> oneCard.id === product.id)
    if(uno ===undefined){
    setCards([
      ...cards,
      product
    ]);
  }
}

  // remove a product
  const deleteProduct = (id)=>{
    setCards(cards.filter((oneCard)=> oneCard.id !== id))
  }

  //count products in the order component(increase)
  const increaseProduct = (id)=>{
    const newProducts = cards.map((oneCard)=>{
      if(oneCard.id === id) {
        oneCard.quantity ++;
      };
      return oneCard;
      
    })
    setCards(newProducts)
  }
  //count products in the order component(decrease)
  const decreaseProduct = (id)=>{
    const newProducts = cards.map((oneCard)=>{
      if(oneCard.id === id ) {
        oneCard.quantity === 1 ? oneCard.quantity = oneCard.quantity : oneCard.quantity --;
      }
      return oneCard;
    })
    setCards(newProducts)
  }

  return (
    <>
    <main className = "menu-btn-products">
      <div className = "menu__buttons">
        <button className = {category ==='desayuno' ? 'btn-menu' : 'btn-unselect'} onClick={() => setCategory('desayuno')} ><span><GiCoffeeCup/></span> Desayuno</button>
        <button className = {category ==='burger' ? 'btn-menu' : 'btn-unselect'} onClick={() => setCategory( 'burger')}><span><GiHamburger/></span> Burger</button>
        <button className = {category ==='bebidas' ? 'btn-menu' : 'btn-unselect'} onClick={() => setCategory( 'bebidas')}><span><GiWaterBottle/></span> Bebidas</button>
        <button className = {category ==='guarnicion' ? 'btn-menu' : 'btn-unselect'} onClick={() => setCategory( 'guarnicion')}><span><GiFrenchFries/></span> Guarnicion</button>
      </div>

      <div className = "products__container" >
        <Products products = {products} addProduct = {addProduct}/>
      </div>
    </main>
    <Order 
      cards = {cards} 
      setProducts = {setCards}
      deleteProduct ={deleteProduct} 
      increaseProduct = {increaseProduct}
      decreaseProduct = {decreaseProduct}
       />
    </>
  )
};
  
  export default Menu;