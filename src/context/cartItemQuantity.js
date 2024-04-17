

import { createContext, useState } from "react";

const CartItemQuantityContext = createContext();

function CartItemQuantityProvider({children}){

    const cart = JSON.parse(window.localStorage.getItem('cart'));

    const [quantity, setQuantity] = useState(cart.length);

    const value = {
        quantity,
        setQuantity
    }
    return(
        <CartItemQuantityContext.Provider value={value}>
            {children}
        </CartItemQuantityContext.Provider>
    )
}

export {CartItemQuantityContext, CartItemQuantityProvider}