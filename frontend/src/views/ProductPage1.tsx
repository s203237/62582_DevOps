import React, { useState } from 'react';
import '../styles/productPage.css';

function ProductPage1() {
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(event.target.value));
    };

    // produkt
    const product = {
        id: 1,
        name: 'Random Item',
        description: 'This random item is a great random item.',
        price: 40,
        image: 'https://via.placeholder.com/400',
        availableOnline: 100
    };

    return (
        <div className="product-page">
            <div className="product-container">
                {/* produkt billede */}
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>

                {/* produkt detaljer */}
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p className="product-description">{product.description}</p>

                    <div className="product-purchase">
                        <div className="product-price">
                            <span>{product.price},-</span>
                        </div>

                        <div className="product-quantity">
                            <label htmlFor="quantity">Antal:</label>
                            <select
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                            >
                                {Array.from(Array(10).keys()).map((number) => (
                                    <option key={number + 1} value={number + 1}>
                                        {number + 1}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <button className="add-to-cart">Læg i Kurv</button>
                        <p>På lager online ({product.availableOnline}+)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage1;