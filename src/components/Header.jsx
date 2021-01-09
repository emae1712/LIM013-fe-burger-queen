import React from 'react';
import '../styles/Header.scss';
import { BsGraphUp } from "react-icons/bs";
import { GiTable, GiForkKnifeSpoon, GiChefToque } from "react-icons/gi";
import { RiRocketFill } from "react-icons/ri";


const Header = () =>(
  <header className = 'header__container'>
    <nav>
      <div>
        <a href= "#home"><RiRocketFill/>stroburger</a>
      </div>
      <a href= "#table"><span className= 'mesa'>< GiTable/></span> Mesas</a>
      <a href= "#menu"><GiForkKnifeSpoon/> Menu</a>
      <a href= "#kitchen"><GiChefToque/> Cocina</a>
      <a href= "#progress"><BsGraphUp/> Progreso</a>
    </nav>
  </header>
);

export default Header;