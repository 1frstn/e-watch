

const Product = ({dispatch,reducerAction,inCart,product}) => {
       
    const iteminCart = inCart ? "Item in Cart: ✔️" : null;   

    const img= new URL(`../images/${product.sku}.jpg`, import.meta.url).href

    const content = (
             <div className="e-product" key={product.sku} >
                <h2>{product.name}</h2>
                <img src={img} alt={product.name} />
                <p>
                    {new Intl.NumberFormat("en-US",{
                        style: "currency",
                        currency: 'USD'
                    }).format(product.price)}
                </p>
                {iteminCart}
                <button onClick={() => dispatch({type: reducerAction.ADD, payload:{...product, qty:1}})} 
                >Add to Cart
                </button>

             </div>
        )

  return content
}

export default Product