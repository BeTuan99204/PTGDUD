import React from 'react'
import { createContext, useState, useContext } from 'react'

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const totalPrice = cart.reduce((total, item) => (total + item.price) * item.quantity, 0); 

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((p) => p.id === product.id);
            if (existingProduct) {
                return prevCart.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((p) =>
                p.id === productId ? { ...p, quantity: Math.max(1, quantity) } : p
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
    };

    let totalItems = cart.reduce((total, item) => (total + item.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

