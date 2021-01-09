import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/NuevaOrden.css';


function NuevaOrden(props) {
    return ( 
    <div>
      <div> 
        <h1>Nueva Orden</h1>
        <h1>Cliente: {props.username}</h1>
        <h1>Mesa: {props.number}</h1>
        <h1>TOTAL: {props.sum} <FaTrashAlt /></h1>
        <button>ENVIAR</button>
      </div>

      <div> 
        <img src="" alt=""/>
      </div>
                
    </div>
      )
  }

  export default NuevaOrden