import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"
import { CartContext } from "../context/CartProvider"

const HomePage = () => {
  const {products} = useContext(ProductContext)
  const {state,dispatch} = useContext(CartContext)
  console.log("Cart STATE>>>",state.cart);
  return (
    <div className="e-homepage-a">
     {products ? products.map(item => (
      
      <div className="e-homepage" key={item.id}>
         <div className="e-homepage-product" >
          <h2>{item.name}</h2>
          <img src={new URL(`../images/${item.sku}.jpg`,import.meta.url).href} alt="" />
          <p>${item.price}</p>
          <button onClick={() => dispatch({type: "ADD",payload: 
          {sku:item.sku,price:item.price,name:item.name,qty:state.cart.qty}})} 
          >
            Add to Cart
          </button>
         </div>
       </div>
      
     )): <p>Page is Loading...</p> }
    </div>
  )
}

export default HomePage