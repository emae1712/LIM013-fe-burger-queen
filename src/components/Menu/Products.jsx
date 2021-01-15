import React, { Fragment } from "react";
import '../../components/../styles/Products.scss';

const Products = ({products, selectCard}) =>{
  
  return (
      <Fragment >
      {
      products.map((product) =>(
        <div className = "product__card" key = {product.id} onClick={() => selectCard(product)} >
          <img className = "img-product" src={product.img} alt=""/>
          <h3 className = "product-name">{product.Product}</h3>
          <p className = "description">{product.Description}</p>
          <h4 className = "costo"> S/. {product.Cost}</h4>
        </div> 
        ))
      }
    </Fragment>

  )
};
  
  export default Products;