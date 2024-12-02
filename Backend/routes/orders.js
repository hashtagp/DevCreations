import express from 'express';
import jwt from 'jsonwebtoken';
import Order from '../models/Order.js';
import User from '../models/User.js';


const orderRoutes = express.Router();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'No token provided' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Unauthorized' });
      req.userId = decoded.id;
      next();
    });
  };

// Fetch All Orders
orderRoutes.get('/', verifyToken, async (req, res) => {
  const orders = await Order.find({ userId: req.userId });
  res.status(200).json(orders);
});

// Fetch Item by Order ID
orderRoutes.get('/:orderId', verifyToken, async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);

  if (!order || order.userId !== req.userId) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.status(200).json(order.items);
});

// Add Item to Cart
orderRoutes.post('/cart', verifyToken, async (req, res) => {
  const { itemId, quantity } = req.body;

  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const existingItem = user.cart.find(item => item.itemId === itemId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    user.cart.push({ itemId, quantity });
  }

  await user.save();
  res.status(200).json(user.cart);
});

export default orderRoutes;
