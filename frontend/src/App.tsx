import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentPage from "./views/PaymentPage";
import HomePage from "./views/HomePage";

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/payment" element={<PaymentPage />} />
        </Routes>
    </BrowserRouter>
);

export default App


