import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentPage from "./views/PaymentPage";

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaymentPage />} />
            <Route path="/users/" element={<div> hej</div>} />
        </Routes>
    </BrowserRouter>
);

export default App


