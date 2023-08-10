import { useContext } from "react"
import { CartContext } from "../context/CartProvider"

const CartPage = () => {
  const {state} = useContext(CartContext)
  console.log("componentCart", state);
  return (
    <div className="e-cart" >
      {state.cart ? state.cart.map((item => (

          <>
           <div className="e-cart-item">          
            <img src={new URL(`../images/${item.sku}.jpg`,import.meta.url).href} alt="" />
            <p>{item.price}</p>
           </div>
          </>

      ))) : <p>Cart is empty, please go back to main page.</p> }
    </div>
  )
}

export default CartPage