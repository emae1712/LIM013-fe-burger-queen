import React from 'react';
import '../styles/Header.scss';
import { BsGraphUp } from "react-icons/bs";
import { GiTable, GiForkKnifeSpoon, GiChefToque } from "react-icons/gi";
import { IoLogoReact } from "react-icons/io5";
import Astro from "../img/astro-logo.png"
import {Link} from "react-router-dom";
const Header = () =>{
return (
  <header className = 'header__container'>
    <div>
      <img className = "logo astro" src={Astro} alt="Astro"/>
      <a href= "#home" className = "logo"><span className = "rocket"><IoLogoReact/></span>stroburger</a>
    </div>
    <nav>
      <Link to = "/tables"> <span>< GiTable/></span> Mesas</Link>
      <Link to = "/menu"><span><GiForkKnifeSpoon/></span> Menu </Link>
      <Link to = "/kitchen"><span><GiChefToque/></span> Cocina </Link>
      <Link to = "/progress"><span><BsGraphUp/></span> Progreso </Link>
    </nav>
  </header>
);
}
export default Header;