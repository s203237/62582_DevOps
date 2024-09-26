// Some of the components in this file have been made with the help of AI
import React from 'react';
import '../styles/ReceiptPage.css';

// ReceiptPage component
const ReceiptPage: React.FC = () => {
    return (
        <div className="receipt-page">
            <h1>Receipt</h1>

            {/* Billing Information Section */}
            <div className="receipt-section">
                <h2>Billing Information</h2>
                <p><strong>Full Name:</strong></p>
                <p><strong>Email:</strong></p>
                <p><strong>Phone Number:</strong></p>
                <p><strong>Street Address:</strong></p>
                <p><strong>Address Line 2:</strong></p>
                <p><strong>Postcode:</strong></p>
                <p><strong>City:</strong></p>
                <p><strong>Country:</strong></p>
            </div>

            {/* Payment Information Section */}
            <div className="receipt-section">
                <h2>Payment Information</h2>
                <p><strong>Payment Method:</strong></p>
                <p><strong>Card Number:</strong></p>
                <p><strong>Expiry Date:</strong></p>
                <p><strong>MobilePay Phone Number:</strong></p>
            </div>

            {/* Thank You Message */}
            <div className="thank-you-message">
                <h3>Thank you for your payment!</h3>
                <p>Your transaction has been processed successfully.</p>
            </div>
        </div>
    );
};

export default ReceiptPage;
