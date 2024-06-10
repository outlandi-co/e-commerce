/* eslint-disable no-unused-vars */

import React from 'react';

const ProductPlaceholder = () => {
  // Dummy product data
  const dummyProducts = [
    {
      id: 1,
      image: 'placeholder-image-url',
      name: 'Placeholder Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$19.99'
    },
    {
      id: 2,
      image: 'placeholder-image-url',
      name: 'Placeholder Product 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '$24.99'
    },
    // Add more dummy product objects as needed
  ];

  return (
    <div className="product-list">
      {dummyProducts.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt="Product" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* Add buttons or actions for update, delete, etc. if needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductPlaceholder;
