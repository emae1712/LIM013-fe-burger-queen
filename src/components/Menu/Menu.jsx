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
  const [card, setCard] = useState([]);

  //add products in Order component, addProduct is onclick event of each card from Products
  const addProduct = (product)=>{
    // create a copy of product to add more properties
    const item = {...product,
    quantity: 1,
    note:""
    }
    //receive an array of each card clicked
    const uno = card.find((oneCard)=> oneCard.id === item.id)
    if(uno ===undefined){
    setCard([
      ...card,
      item
    ]);
  }
}
  

  // remove a product
  const deleteProduct = (id)=>{
    setCard(card.filter((oneCard)=> oneCard.id !== id))
  }

  // contador de productos
  // const [count, setCount] = useState(1);

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
    <Order cards = {card} deleteProduct ={deleteProduct} />
    </>
  )
};
  
  export default Menu;