import  { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // eslint-disable-next-line no-undef
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description}, ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
