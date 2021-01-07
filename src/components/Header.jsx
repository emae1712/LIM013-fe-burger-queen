import React from 'react';
import { Fa500Px, FaAvianex } from "react-icons/fa";
import { GiTable } from "react-icons/gi";


const Header = () =>(
  <header>
    <nav>
      <ul>
        <li><a href= "#home"><Fa500Px/> Astroburger</a></li>
        <li><FaAvianex/> Mesas</li>
        <li><GiTable/> Menu</li>
        <li>Cocina</li>
        <li>Progreso</li>
      </ul>
    </nav> 
  </header>

);

export default Header;