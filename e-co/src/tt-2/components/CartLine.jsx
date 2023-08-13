
const CartLine = ({item,dispatch,reducerAction}) => {
    const img = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

    const lineTotal = item.qty * item.price;

    const highestQunatity = 20 > item.qty ? 20 : item.qty;
    
    const optionValues = [...Array(highestQunatity).keys()].map(i => i+1);

    const options = optionValues.map(val => {
        return (
            <option value={val} key={`opt${val}`} >{val}</option>
        )
    } ) 

    const onChangeQty = (e) => {
        dispatch({type:reducerAction.QUANTITY, 
            payload: {...item,qty: Number(e.target.value)}})
    }

    const onRemoveFromCart = () => dispatch({
        type: reducerAction.REMOVE,
        payload: item
    })
    
    const content = (
        <li className="e-cart-item" >
            <img src={img} alt={item.name} className="e-cart-img" />
            <div aria-label="item name" >{item.name}</div>
            <div aria-label="Price per item" >{new Intl.NumberFormat('en-US',{
                style:'currency',
                currency: 'USD'
            }).format(item.price)}
            </div>
            <label htmlFor="itemQty" className="offscreen" >Item Quantity</label>
            <select 
                name="imteQty" 
                id="itemQty"
                className="e-cart-select"
                value={item.qty}
                aria-label="Item Quantity"
                onChange={onChangeQty}
                >
                {options}
            </select>

            <div className="e-cart-item-subtotal"  aria-label="Line Item Subtotal" >
                {new Intl.NumberFormat('en-US',{
                    style:'currency',
                    currency:'USD'
                }).format(lineTotal)}
            </div>

            <button
               className="e-cart-button"
               aria-label="Remove Item From Cart"
               title="REmove item from cart"
               onClick={onRemoveFromCart}
               >
                ❌

            </button>

        </li>
    ) 

  return content
}

export default CartLine