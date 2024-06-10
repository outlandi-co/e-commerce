/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ id, name, image, price, description }) => {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            {/* Update and delete buttons */}
            <button>Update</button>
            <button>Delete</button>
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default Product;
