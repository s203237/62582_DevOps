import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext'; // Assuming CartProvider wraps the context
import ShoppingBasketPage from '../views/ShoppingBasketPage';

const mockCart = [
  {
    product: {
      id: 1,
      title: "Test Product 1",
      price: 100,
      discountPercentage: 10,
      thumbnail: "/test-image1.jpg",
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      title: "Test Product 2",
      price: 200,
      discountPercentage: 5,
      thumbnail: "/test-image2.jpg",
    },
    quantity: 1,
  }
];

jest.mock('../context/CartContext', () => ({
  useCart: () => ({
    cart: mockCart,
    removeFromCart: jest.fn(),
    updateQuantity: jest.fn(),
  }),
}));

const renderComponent = () =>
  render(
    <CartProvider>
      <BrowserRouter>
        <ShoppingBasketPage onQuantityChange={jest.fn()} />
      </BrowserRouter>
    </CartProvider>
  );

describe('ShoppingBasketPage', () => {
  it('should display empty cart message when there are no items', () => {
    jest.mock('../context/CartContext', () => ({
      useCart: () => ({
        cart: [],
        removeFromCart: jest.fn(),
        updateQuantity: jest.fn(),
      }),
    }));
    
    renderComponent();

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('should display cart items when there are products in the cart', () => {
    renderComponent();

    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    expect(screen.getByText('$90.00')).toBeInTheDocument();  // After discount
    expect(screen.getByText('$190.00')).toBeInTheDocument(); // After discount
  });

  it('should allow updating the quantity of products', () => {
    renderComponent();

    const incrementButton = screen.getAllByText('+')[0];
    fireEvent.click(incrementButton);

    expect(screen.getByDisplayValue('3')).toBeInTheDocument();  // Quantity should update
  });

  it('should allow removing an item from the cart', () => {
    renderComponent();

    const deleteButton = screen.getAllByText('🗑️')[0];
    fireEvent.click(deleteButton);

    // You should mock `removeFromCart` function to check if it's called
    expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();
  });

  it('should navigate to the homepage when "Shop more" is clicked', () => {
    const { getByText } = renderComponent();

    const backButton = getByText(/shop more/i);
    fireEvent.click(backButton);

    // Mock useNavigate and verify it was called with correct arguments
    expect(window.location.pathname).toBe('/');
  });

  it('should navigate to the payment page when "Go to checkout" is clicked', () => {
    const { getByText } = renderComponent();

    const checkoutButton = getByText(/go to checkout/i);
    fireEvent.click(checkoutButton);

    // Mock useNavigate and verify it was called with correct arguments
    expect(window.location.pathname).toBe('/payment');
  });
});
