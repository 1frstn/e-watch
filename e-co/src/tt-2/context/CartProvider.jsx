import { useReducer } from "react";
import { createContext } from "react";

const initState = {
    cart: []
};

const REDUCER_ACTION_TYPE = {
    ADD:"ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

const reducer = (state,action) => {
     switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:{
            if(!action.payload){
                throw new Error("action.payload missing in ADD action")
            }
            const {sku,name,price} = action.payload
            const filteredItem = state.cart.filter(item => item.sku !== sku)
            const itemExist = state.cart.find(item => item.sku === sku)
            const qty = itemExist ? itemExist.qty + 1 : 1 ;

            return {...state, cart: [...filteredItem,{sku,name,price,qty}]}
        }
        default:
            throw new Error("Unidentified action type")
     } 
}  


export const  CartContext = createContext(initState)

const CartProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initState)

    return(
        <CartContext.Provider value={{state,dispatch}}>
          {children}
        </CartContext.Provider>
    )
} 

export default CartProvider





























/* import { createContext } from "react";
import { useMemo } from "react";
import { useReducer } from "react";

const initCartState = {
    cart:[]
};

const REDUCER_ACTION_TYPE = {
    ADD:"ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

const reducer = (state,action) => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD :{
            if(!action.payload){
                throw new Error("action.payload missing in ADD action")
            }
            const {id,sku,name,price} = action.payload
            
            const filteredCart = state.cart.filter(item => item.sku === sku)
            
            const itemExists = state.cart.find(item => item.sku === sku)
            
            const qty = itemExists ? itemExists.qty + 1 : 1
            
            return {...state, cart: [...filteredCart,{id,sku,name,price,qty}]}
       }
        case REDUCER_ACTION_TYPE.REMOVE:{
            if(!action.payload){
                throw new Error("action.payload missing in ADD action")
            }
            const {sku} = action.payload
            
            const filteredCart = state.cart.filter(item => item.sku !== sku)
            
            return {...state, cart: [...filteredCart]}
            
           }
        case REDUCER_ACTION_TYPE.QUANTITY :{
            if(!action.payload){
                throw new Error("action.payload missing in ADD action")
            }

            const {sku,qty} = action.payload;

            const itemExists = state.cart.find((item) => item.sku === sku)

            if(!itemExists){
                throw new Error("Item must exist in order to update quantity");
            }

            const updatedItem = {...itemExists,qty}

            const filtredCart = state.cart.filter(
                item => item.sku !== sku
            )

            return {...state, cart: [...filtredCart, updatedItem]}
        }
        case REDUCER_ACTION_TYPE.SUBMIT :{
            return {...state, cart: []}    
            }
        default:
            throw new Error("Unidentified reducer action type")
    }
}

const useCartContext = (initCartState) =>{
    const [state,dispatch] = useReducer(reducer,initCartState)

    const REDUCER_ACTION = useMemo(() => {
        return REDUCER_ACTION_TYPE
    },[])

    const totalItem = state.cart.reduce((previousValue,cartItem) => {
        return previousValue + cartItem.qty
    },0)

    const totalPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })

    const cart = state.cart.sort((a,b) => {
        const itemA = Number(a.sku.slice(-4));
        const itemB = Number(a.sku.slice(-4))

        return itemA - itemB
    })

    return {dispatch,REDUCER_ACTION,totalItem,totalPrice,cart}
}

const initCartContextState = {
    dispatch: () => {},
    REDUCER_ACTION: REDUCER_ACTION_TYPE,
    totalItem: 0,
    totalPrice: "",
    cart: [],
}

export const CartContext = createContext(initCartContextState)

export function CartProvider({children}) {
    return(
       <CartContext.Provider value={useCartContext(initCartState)}>
        {children}
       </CartContext.Provider>
    )
}

export default CartContext; */