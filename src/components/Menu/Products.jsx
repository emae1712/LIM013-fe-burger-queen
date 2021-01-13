import React, {Fragment} from "react";

const Products = ({products}) =>{
console.log(products);
  return (
    <Fragment>
      {
      products.map((product) =>(
        <div className = "products__container" key = {product.id}>
          <img src={product.img} alt=""/>
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
    </Fragment>
  )
};
  
  export default Products;