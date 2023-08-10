import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="e-header">
        <h1><Link to={'/'} >FRSTN Co.</Link></h1>
        <div className='e-nav' >
            <p>Total Item: </p>
            <p>Total Price: $ </p>
            <button><Link to={'/cart'} >View Cart</Link></button>
        </div>
    </div>
  )
}

export default Header