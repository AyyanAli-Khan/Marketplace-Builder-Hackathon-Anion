// contexts/CartContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CartProduct = {
    image_url: string;
    name: string;
    price: number;
    quantity: number;
};

type CartContextType = {
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (productName: string) => void;
    updateQuantity: (productName: string, quantity: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (product: CartProduct) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.name === product.name);
            if (existingProductIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return updatedCart;
            }
            return [...prevCart, product];
        });
    };

    const removeFromCart = (productName: string) => {
        setCart(prevCart => prevCart.filter(item => item.name !== productName));
    };

    const updateQuantity = (productName: string, quantity: number) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.name === productName 
                    ? { ...item, quantity } 
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addToCart, 
                removeFromCart, 
                updateQuantity, 
                clearCart 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};