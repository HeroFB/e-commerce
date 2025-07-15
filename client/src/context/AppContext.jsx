import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;
    // const currency = import.meta.VITE_CURRENCY;
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null) //null
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])

    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    // Fetch all products
    const fetchProducts = async ()=>{
        setProducts(dummyProducts)
    }

    // Add to cart
    const addToCart = (itemID)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemID]){
            cartData[itemID] += 1;

        }else{
            cartData[itemID] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart")
    }

    // update cart quantity
    const updateCartItem = (itemID, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemID] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    // remove product from cart
    const removeFromCart = (itemID)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemID]){
            cartData[itemID] -= 1;
            if(cartData[itemID] === 0){
                delete cartData[itemID];
            }
        }

        toast.success("Removed from Cart")
        setCartItems(cartData)
    }

    // get cart item count
    const getCartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // get cart total amount
    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            if(cartItems[items] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    const value = {navigate, user, setUser, setIsSeller, isSeller, 
        showUserLogin, setShowUserLogin, products, currency, addToCart, 
        updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery,
        getCartAmount, getCartCount

    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}