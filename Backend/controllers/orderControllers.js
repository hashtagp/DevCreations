import Order from '../models/Order.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Middleware to verify JWT
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });
    req.userId = decoded.id;
    next();
  });
};

// Fetch All Orders
export const fetchAllOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.userId });
  res.status(200).json(orders);
};

// Fetch Order by ID
export const fetchOrderById = async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);

  if (!order || order.userId !== req.userId) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.status(200).json(order);
};

// Add Item to Cart
export const addItemToCart = async (req, res) => {
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
};

// Create Order
export const createOrder = async (req, res) => {
  const { items, totalAmount, payment } = req.body;

  const newOrder = new Order({
    userId: req.userId,
    items,
    totalAmount,
    payment,
    status: 'Pending',
  });

  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order || order.userId !== req.userId) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = status;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error });
  }
};