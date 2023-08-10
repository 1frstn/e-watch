import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import HomePage from './HomePage';
import CartPage from './CartPage';
import PlaceOrderPage from './PlaceOrderPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProductProvider } from '../context/ProductProvider';
import CartProvider from '../context/CartProvider';


const MainPage = () => {
  return (
    <div className='e-mainpage'>
     <Router>
       <ProductProvider> 
        <CartProvider>
        <Header/>
        <Routes>
            <Route path='/' index element={<HomePage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/final' element={<PlaceOrderPage/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
        </ProductProvider> 
     </Router>
    </div>
  )
}

export default MainPage