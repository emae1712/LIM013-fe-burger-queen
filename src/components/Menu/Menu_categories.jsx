import React, { useState, useEffect } from 'react';
import { GiCoffeeCup, GiHamburger, GiWaterBottle, GiFrenchFries } from "react-icons/gi";
import '../../components/../styles/Menu_categories.scss';
import {getProducts} from "../../firebase/firestore";
import Products from './Products';
import  {Fragment} from "react";

const Menu = () =>{
  const [category, setCategory] = useState('desayuno' );
  //console.log(category);
  
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts(category)
    .then((arrayProduct)=>{
      setProducts(arrayProduct);
    })
  }, [category]);

  // const item = products.map((product) => {
  //   return{
  //     Product: product.Product,
  //     img: product.img,
  //     Description: product.Description,
  //     Cost: product.Cost,
  //   }

  // })

  return (
    <section>
    <div className = "menu__buttons" >
      <button className = 'btn-menu' onClick={() => setCategory('desayuno')} ><span><GiCoffeeCup/></span> Desayuno</button>
      <button className = 'btn-menu' onClick={() => setCategory( 'burger')}><span><GiHamburger/></span> Burger</button>
      <button className = 'btn-menu' onClick={() => setCategory( 'bebidas')}><span><GiWaterBottle/></span> Bebidas</button>
      <button className = 'btn-menu' onClick={() => setCategory( 'guarnicion')}><span><GiFrenchFries/></span> Guarnicion</button>
    </div>

    <Fragment >
    <Products products = {products}/>
    </Fragment>
    
    </section>
  )
};
  
  export default Menu;