import { ProductContext } from "./tt-2/context/ProductProvider"
import useProducts from "./tt-2/hooks/useProducts"


function App() {
  const {products} = useProducts(ProductContext)
  return (
    
      <>
        {products.map(item => (
            <div key={item.sku} > 
            <h1>{item.name}</h1>
            </div>
         ))}
      </>
  
  )
}

export default App
