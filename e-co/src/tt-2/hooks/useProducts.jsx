import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

function useProducts(){
    return useContext(ProductContext)
}

export default useProducts