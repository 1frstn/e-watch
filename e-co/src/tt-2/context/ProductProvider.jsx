import { createContext,useEffect } from "react";
import { useState } from "react";


const initContextState = { products:[] }

export const ProductContext = createContext(initContextState)

export const ProductProvider = ({ children }) => {
    const [products,setProducts] = useState();
   
    useEffect(() => {
        const fetchProducts = async () =>{
            const data = await fetch('http://localhost:3050/products')
                         .then(res => res.json())
                         .catch(err => console.log("Fetchin Error",err.message))
            return data             
        }
        fetchProducts().then(res => setProducts(res))
    },[])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
} 
