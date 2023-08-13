import { useState } from "react"
import Header from './tt-2/components/Header'
import Footer from './tt-2/components/Footer'
import Cart from "./tt-2/components/Cart"
import ProductList from "./tt-2/components/ProductList"
import useCart from "./tt-2/hooks/useCart"

function App() {
  const [viewCart,setViewCart] = useState(false)
  
  const pageContent = viewCart ? <Cart/> : <ProductList/>;

  const {totalItem,totalPrice} = useCart();
 
  return (
    
      <>
        <Header viewCart={viewCart} setViewCart={setViewCart} totalItem={totalItem} totalPrice={totalPrice} />
        {pageContent}
        <Footer viewCart={viewCart}  totalItem={totalItem} totalPrice={totalPrice} />
      </>
  
  )
}

export default App
