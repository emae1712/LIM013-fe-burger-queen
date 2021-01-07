import React from 'react';
import { BsGraphUp } from "react-icons/bs";
import { GiTable, GiForkKnifeSpoon, GiChefToque } from "react-icons/gi";
import { RiRocketFill } from "react-icons/ri";


const Header = () =>(
  <header className = 'header__container'>
    <nav>
      <ul>
        <li><a href= "#home"><RiRocketFill/>stroburger</a></li>
        <div>
          <li><p className= 'mesa'>< GiTable/></p> Mesas</li>
          <li><GiForkKnifeSpoon/> Menu</li>
          <li><GiChefToque/> Cocina</li>
          <li><BsGraphUp/> Progreso</li>
        </div>
      </ul>
    </nav> 
  </header>
);

export default Header;