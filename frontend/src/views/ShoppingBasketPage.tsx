import React from 'react';
import { useCart } from '../context/CartContext';


const ShoppingBasketPage: React.FC = () => {
  const { cart } = useCart();
  // Calculate the subtotal for all items in the cart
  const subTotal = cart.reduce((acc, { product, quantity }) => {
    // Calculate the total for each product considering discount
    const totalBeforeDiscount = product.price * quantity;
    const discount = product.discountPercentage
      ? (totalBeforeDiscount * product.discountPercentage) / 100
      : 0;
    const totalForProduct = totalBeforeDiscount - discount;

    return acc + totalForProduct;
  }, 0);
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(({ product, quantity }) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>Quantity: {quantity}</p>
              <p>Price: ${product.price}</p>
              <p>Total: $ subTotal</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingBasketPage;
