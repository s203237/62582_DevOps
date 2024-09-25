import React, { createContext, useContext, useState } from 'react';
import { Product } from '../interface/products';
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    product:Product;
  
}
export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

const addToCart = (product: Product, quantity: number) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingItemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity, name: product.title, product }];
            }
        });
    };
    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.product.id === id
              ? { ...item, quantity: quantity > 0 ? quantity : 1 }
              : item
          )
        );
      };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>{children}
           
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};