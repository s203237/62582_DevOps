import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/views/HomePage"; // Import your HomePage component
import PaymentPage from "../src/views/PaymentPage"; // Import PaymentPage component
import productsData from "./data/products.json"; // Import the products JSON file
import { HomePageProvider } from "../src/context/HomePageContext";

const App: React.FC = () => {
  return (
    <HomePageProvider>
      <BrowserRouter>
        <Routes>
          {/* Pass the products prop to HomePage */}
          <Route
            path="/"
            element={<HomePage products={productsData.products} />}
          />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </HomePageProvider>
  );
};

export default App;
