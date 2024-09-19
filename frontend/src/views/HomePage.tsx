import React, { useState } from "react";
import { Product } from "../interface/products";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

interface HomePageProps {
  products: Product[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  // Limit the number of products displayed
  //const limitedProducts = products.slice(0, 5);

  //Load more products
  const [visibleProducts, setVisibleProducts] = useState(6);
  const navigate = useNavigate();

  // Show more products when the button is clicked
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 3);
  };
  // handle product click to navigate to ProductPage
  const handleProductClick= (id: number) => {
    navigate(`/product/${id}`);
  }

  return (
    <div>
      <h1>Name and Logo</h1>
      <div className="products-container">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product"
            onClick={() => handleProductClick(product.id)}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} width="100" />
          </div>
        ))}
      </div>
      {/* Show 'Load More' button if there are more products to load */}
      {visibleProducts < products.length && (
        <button onClick={loadMoreProducts}>Load More</button>
      )}
      <div>
        <a href="http://localhost:3000/payment/">PAYMENT</a>
      </div>
    </div>
  );
};

export default HomePage;
