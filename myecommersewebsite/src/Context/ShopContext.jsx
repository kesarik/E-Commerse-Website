//context= that allows data to be passed down the component tree without explicitly passing it through each level as props.
//shopcontext= used to store and share information related to a shopping context 
import React, { createContext, useState } from "react";
import all_product from "../Component/Assets/all_product";

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;  
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))// update the state
        console.log(cartItems);
    }
    const removeToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeToCart};
    //using context we cant access all cart item data in any component.
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}{/*used to render the child components that are wrapped by this context provider.*/}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
//using this we provide the shopcontext data to all pages.
  //here we wrap app(root) to shopcontext so using that it is available to all component.
 