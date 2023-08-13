import useProduct from '../hooks/useProducts'
import useCart from '../hooks/useCart'
import Product from './Product'

const ProductList = () => {
  const {products} = useProduct()
  const {dispatch,reducerAction,cart} = useCart()

  let pageContent =  <p>Loading...</p> 
  
  if(products?.length){
    pageContent = products.map(product => {
      const inCart = cart.some(item => item.sku === product.sku )
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          reducerAction={reducerAction}
          inCart={inCart}       
        />
      )
    })
  }

  const content = <main className='e-main' > {pageContent} </main>

  return content
}

export default ProductList