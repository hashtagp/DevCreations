import express from 'express';
import { fetchAllProducts, fetchProductById } from '../controllers/productControllers.js';

const productRoutes = express.Router();

// Fetch All Products
productRoutes.get('/', fetchAllProducts);

// Fetch Product by ID
productRoutes.get('/:productId', fetchProductById);

export default productRoutes;