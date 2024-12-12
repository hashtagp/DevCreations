import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      itemId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true, default: 'Pending' }, // New field
  payment: {
    method: { type: String, required: true },
    status: { type: Boolean, required: true ,default: false},
  }, // New field
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;