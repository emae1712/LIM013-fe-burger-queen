import React from "react";
import '../../components/../styles/Products.scss';

const Products = ({products}) =>{
const cardProduct = (e) => {
  console.log(e.target);
} 

  return (
      <div className = "products__container" >
      {
      products.map((product) =>(
        <div className = "product__card" onClick={cardProduct} key = {product.id}>
          <img className = "img-product" src={product.img} alt=""/>
          <h3 className = "product-name">{product.Product}</h3>
          <p className = "description">{product.Description}</p>
          <h4 className = "costo"> S/. {product.Cost}</h4>
        </div> 
        ))
      }
    {/* <div className = "products__container">
			<img src={item.img} alt=""/>
      <h3 className = "product-name">{item.Product}</h3>
      <p className = "description">{item.Description}</p>
      <h4 className = "costo"> S/. {item.Cost}</h4>
    </div> */}
    </div>

  )
};
  
  export default Products;