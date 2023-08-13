
const Footer = ({viewCart,totalPrice,totalItem}) => {
  return (
    viewCart ? <p>Shopping Cart &copy; 2023</p>:
    (<div className="e-footer" >
        <p>Total Item:{totalItem} </p>
        <p>Total Price: {totalPrice} </p>
        <p>Shopping Cart &copy; 2023</p>
    </div>)
  )
}

export default Footer