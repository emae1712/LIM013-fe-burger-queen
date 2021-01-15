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

  // select each product
  const [card, setCard] = useState([]); //como deberia iniciar

  //seleccionar producto
  const selectCard = (card)=>{
    setCard(card);
    console.log(card);
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
        <Products products = {products} selectCard = {selectCard}/>
      </div>
    </main>
    <Order id = {card.id} product = {card.Product} cost = {card.Cost}/>
    </>
  )
};
  
  export default Menu;