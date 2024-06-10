
/* eslint-disable no-unused-vars */
import React from 'react';

const ShoppingCart = () => {
    // Dummy cart items
    const cartItems = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 1,
        },
        // Add more cart items as needed
    ];

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button>Remove</button>
                    </div>
                ))}
            </div>
            <button>Checkout</button>
        </div>
    );
};

export default ShoppingCart;
