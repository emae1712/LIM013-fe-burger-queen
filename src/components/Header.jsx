import React from 'react';
import '../styles/Header.scss';
import { BsGraphUp } from "react-icons/bs";
import { GiTable, GiForkKnifeSpoon, GiChefToque } from "react-icons/gi";
import { IoLogoReact } from "react-icons/io5";
import Astro from "../img/astro-logo.png"
import {Link, NavLink} from "react-router-dom";
const Header = () =>{
return (
  <header className = 'header__container'>
    <div>
      <img className = "logo astro" src={Astro} alt="Astro"/>
      <Link to = "/tables" className = "logo"><span className = "rocket"><IoLogoReact/></span>stroburger</Link>
    </div>
    <nav>
      <NavLink exact={true} activeClassName="activeRoute" activeStyle={{ color: 'teal' }} to = "/tables"> <span>< GiTable/></span> Mesas</NavLink>
      <NavLink to = "/menu"><span><GiForkKnifeSpoon/></span> Menu </NavLink>
      <NavLink to = "/kitchen"><span><GiChefToque/></span> Cocina </NavLink>
      <NavLink to = "/progress"><span><BsGraphUp/></span> Progreso </NavLink>
    </nav>
  </header>
);
}
export default Header;