import React from 'react';
import '../styles/Header.scss';
import { BsGraphUp } from "react-icons/bs";
import { GiTable, GiForkKnifeSpoon, GiChefToque } from "react-icons/gi";
import { IoLogoReact } from "react-icons/io5";
import Astro from "../img/astro-logo.png"
const Header = () =>{
return (
  <header className = 'header__container'>
    <div>
      <img className = "logo astro" src={Astro} alt="Astro"/>
      <a href= "#home" className = "logo"><span className = "rocket"><IoLogoReact/></span>stroburger</a>
    </div>
    <nav>
      <a href= "#table"><span>< GiTable/></span> Mesas</a>
      <a href= "#menu"><span><GiForkKnifeSpoon/></span> Menu</a>
      <a href= "#kitchen"><span><GiChefToque/></span> Cocina</a>
      <a href= "#progress"><span><BsGraphUp/></span> Progreso</a>
    </nav>
  </header>
);
}
export default Header;