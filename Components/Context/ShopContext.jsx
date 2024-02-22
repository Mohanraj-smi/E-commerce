import React, { createContext, useState } from "react";
import { PRODUCTS } from "../../AllProduct";


export const ShopContext=createContext(null);

// getdefault items
const getDefaultCart = ()=>{
    let cart={};
    for(let i=0;i<PRODUCTS.length + 1;i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const[cartItems,setCartItems]=useState(getDefaultCart())
    
    
    //addtocart
    const addToCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    //removecart
    const removeFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }

    //gettotalcart
    const getTotalCartAmount = () =>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=PRODUCTS.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.price*cartItems[item];
            }
           
        }
        return totalAmount;
        
    }

    //gettotalcartitems
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }




    const contextValue = {PRODUCTS,getTotalCartItems, getTotalCartAmount, cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;