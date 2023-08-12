import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './tt-2/context/ProductProvider.jsx'
import CartProvider from './tt-2/context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
