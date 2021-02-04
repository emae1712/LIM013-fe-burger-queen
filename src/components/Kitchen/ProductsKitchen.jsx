import React, {useState} from "react";

const ProductsKitchen = ({orderData}) =>{
  console.log(orderData);

  // //lis of products
  const [ordersItem, setOrdersItem] = useState(orderData);

  // //check item
  const checkItem = item=>{
    setOrdersItem(ordersItem.map((i)=>i.id ===item.id ? {...i, done: !i.done}: i));
  }
  return(
    ordersItem.map((item)=>(
    <tbody key = {item.id}>
    <tr>
      <td>{item.quantity}</td>
      <td>
        {item.product}
        {item.note}
      </td>
      <td><input type="checkbox" checked={item.done} onChange={()=>checkItem(item)}/></td>
    </tr>
    </tbody>
))
  )
}

export default ProductsKitchen;