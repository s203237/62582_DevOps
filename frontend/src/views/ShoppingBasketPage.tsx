import React from "react";
import { useCart } from "../context/CartContext";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  image: string; // Add the 'image' property to the 'Product' type
  price: number;
  discountPercentage?: number;
}

const ShoppingBasketPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Assuming removeItem is a function in CartContext
  const removeItem = removeFromCart;
  const navigate = useNavigate();
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
  const handleBack = () => {
    navigate("/");
  };
  const handlePay = () => {
    navigate("/payment");
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
            
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const totalBeforeDiscount = item.product.price * item.quantity;
                const discount = item.product.discountPercentage
                  ? (totalBeforeDiscount * item.product.discountPercentage) /
                    100
                  : 0;
                const totalForProduct = totalBeforeDiscount - discount;

                return (
                  <tr key={item.product.id}>
                    <td>
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{item.product.title}</td>
                    <td>${item.product.price.toFixed(2)}</td>
                    <td>

                      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          style={{ width: "40px", textAlign: "center", border: "1px solid #ccc" }}
                        />
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                      </div>
                    </td>
                    <td>${totalForProduct.toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.product.id)}>🗑️</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <h2>Total: ${subTotal.toFixed(2)}</h2>
        </>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          marginRight: "10px",
        }}
      >
        <button type="button" onClick={handleBack}>
          Shop more
        </button>
        <button type="submit" onClick={handlePay}>
          {" "}
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasketPage;
