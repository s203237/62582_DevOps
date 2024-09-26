import React, { useState, useEffect, useRef, useCallback } from "react";
import { Product } from "../interface/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/HomePage.css";
import { FaShoppingCart } from 'react-icons/fa';

interface HomePageProps {
    products: Product[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
    const { addToCart } = useCart();
    const [visibleProducts, setVisibleProducts] = useState(6);
    const navigate = useNavigate();
    const observerRef = useRef<HTMLDivElement | null>(null); // Ref for the observer target

    // Function to handle adding a product to the cart
    const handleAddToCart = (product: Product) => {
        addToCart(product, 1);
        alert(`${product.title} has been added to your cart!`);
    };

    // Navigate to product details
    const handleProductClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    // Infinite scroll: load more products when the user scrolls to the end
    const loadMoreProducts = useCallback(() => {
        setVisibleProducts((prev) => prev + 3);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMoreProducts();
            }
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [loadMoreProducts]);

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">MegaMart</h1>
            <div className="products-container">
                {products.slice(0, visibleProducts).map((product) => (
                    <div key={product.id} className="product-card">
                        <div onClick={() => handleProductClick(product.id)}>
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Price: ${product.price}</p>
                            <img src={product.thumbnail} alt={product.title} className="product-image" />
                        </div>
                        <button className="quick-add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                            <span className="cart-icon">
                                <FaShoppingCart />
                            </span> 
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            {/* Invisible div used to trigger infinite scrolling */}
            <div ref={observerRef} style={{ height: 1 }}></div>
            <div className="payment-link-container">
                <a href="/payment/" className="payment-link">PAYMENT</a>
            </div>
        </div>
    );
};

export default HomePage;
