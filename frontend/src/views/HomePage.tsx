import React from "react";
import { Product } from "../interface/products"; // Assuming you're importing an interface for Product

interface HomePageProps {
  products: Product[]; // Define that the prop 'products' is an array of Product
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <div>
      <h1>Name and Logo</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} width="100" />
          </div>
        ))}
      </div>
      {/* Payment link */}
      <div>
        <a href="http://localhost:3000/payment/">PAYMENT</a>
      </div>
    </div>
  );
};

export default HomePage;
