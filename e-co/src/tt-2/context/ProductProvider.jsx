/* import { createContext} from "react";
import { useState } from "react";

const initState = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

const initContextState = { products:[] }

export const ProductContext = createContext(initContextState)

export const ProductProvider = ({ children }) => {
    const [products] = useState(initState); */
       /* useEffect(() => {
        const fetchProducts = async () =>{
            const data = await fetch('http://localhost:3050/products')
                         .then(res => res.json())
                         .catch(err => console.log("Fetchin Error",err.message))
            return data             
        }
        fetchProducts().then(res => setProducts(res))
    },[]) */

   /*  return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
} 

export default ProductProvider */




import { createContext, useState } from "react"



const initState = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

const initProductContext = {
    products:[]
}

export const ProductContext = createContext(initProductContext)


export const ProductProvider = ({children}) => {

    const [products]=useState(initState)

    return (
        <ProductContext.Provider value={{products}} >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider



