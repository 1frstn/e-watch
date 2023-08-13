import { useState } from "react";
import useCart from "../hooks/useCart"
import CartLine from "./CartLine";

const Cart = () => {
  const {dispatch,cart,totalItem,totalPrice,reducerAction} = useCart();
   
  const [confirm,setConfirm] = useState(false);

  const onSubmitOrder = () => {
    dispatch({type: reducerAction.SUBMIT});
    setConfirm(true)
  }

  const pageContent = confirm ? ( <h2>Thank You for your order.</h2> ) : (
    <>
     <h2>Cart</h2>
     <ul className="e-cart" >
      {cart.map(item => <CartLine key={item.sku} item={item} dispatch={dispatch} reducerAction={reducerAction} />)}
     </ul>
     <div className="e-cart-total" >
      <p>Total Item: {totalItem}</p>
      <p>Total Price: {totalPrice}</p>
      <button 
         className="e-cart-submit"
         disabled={!totalItem}
         onClick={onSubmitOrder}
         >
        Place Order
      </button>
     </div>
    </>
  )

  const content = <main className="e-main-cart" >{pageContent}</main>

  return content
}

export default Cart