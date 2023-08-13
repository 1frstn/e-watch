
const Header = ({viewCart,setViewCart,totalItem,totalPrice}) => {
  return (
    <div className="e-header">
        <h1>FRSTN Co.</h1>
        <div className='e-nav' >
            <p>Total Item:{totalItem} </p>
            <p>Total Price:{totalPrice} </p>
            <button onClick={() => setViewCart(!viewCart)} >
              {viewCart ? <p>View Products List</p> : <p>View Cart</p> }
            </button>
        </div>
    </div>
  )
}

export default Header