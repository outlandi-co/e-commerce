import axios from 'axios';

const API_URL = 'http://localhost:5001/api/products'; // Update URL if your backend is running on a different port or domain

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    throw error;
  }
};

const createProduct = async (product) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error('Failed to create product:', error);
    throw error;
  }
};

const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(`Failed to update product with ID ${id}:`, error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Failed to delete product with ID ${id}:`, error);
    throw error;
  }
};

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
