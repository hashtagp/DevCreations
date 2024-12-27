import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';

const Package = () => {
  const { token, url } = useContext(StoreContext);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(false);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        console.log("Fetching order:", orderId);
        console.log("Token:", token);
        const response = await axios.get(`${url}/api/orders/${orderId}`, { headers: { Authorization: `Bearer ${token}` } });
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
        setError(true);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId, token, url]);

  const updateQuantity = (change, price, index) => {
    const updatedItems = [...order.items];
    let quantity = updatedItems[index].quantity + change;
    if (quantity < 0) quantity = 0;

    updatedItems[index].quantity = quantity;
    setOrder({ ...order, items: updatedItems });
  };

  if (error) {
    return (
      <div className="error-container flex justify-center items-center h-1/2">
        <div className="error text-red-500 text-2xl font-bold">Failed to load order. Please try again.</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="loading-container flex justify-center items-center h-1/2">
        <div className="loading text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="package mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">TRACK YOUR PACKAGE</h1>
      <p className="text-gray-600 mb-4">Estimated Delivery: <span className="font-bold">{order.estimatedDelivery || "TBD"}</span></p>

      <div className="bg-blue-200 p-8 rounded-lg shadow-md mb-8">
        <div className="justify-between items-center relative">
          <div className="flex-1 text-center relative">
            <div className="w-8 h-8 mx-auto bg-orange-500 rounded-full"></div>
            <p className="mt-2 text-sm font-semibold">Ordered</p>
            <p className="text-xs text-gray-500">{order.orderDate || "Tue, 10 June"}</p>
          </div>
          <div className="absolute left-1/3 top-4 w-1/3 h-1 bg-orange-500"></div>
          <div className="flex-1 text-center relative">
            <div className="w-8 h-8 mx-auto bg-orange-500 rounded-full"></div>
            <p className="mt-2 text-sm font-semibold">Shipped</p>
            <p className="text-xs text-gray-500">{order.shippedDate || "Thu, 13 June"}</p>
          </div>
          <div className="absolute left-2/3 top-4 w-1/3 h-1 bg-gray-300"></div>
          <div className="flex-1 text-center relative">
            <div className="w-8 h-8 mx-auto bg-gray-300 rounded-full"></div>
            <p className="mt-2 text-sm font-semibold text-gray-400">Delivered</p>
            <p className="text-xs text-gray-400">{order.deliveredDate || "Thu, 13 June"}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full bg-orange-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <div id="cart-items" className="space-y-6">
            {order.items.map((item, index) => (
              <div key={index} className="flex flex-wrap items-center justify-between border-b pb-4 bg-orange-200 rounded-lg p-4">
                <img src={item.image || "default-image-url"} alt={item.name || "Product Image"} className="w-48 h-48 rounded-lg object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  {/* Optionally display item size/color */}
                  {/* <p className="text-sm text-gray-800">SIZE: {item.size}</p>
                  <p className="text-sm text-gray-800">COLOUR: {item.color}</p> */}
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Rs {item.price}</span>
                  <div className="flex items-center border rounded">
                    <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(-1, item.price, index)}>-</button>
                    <input id={`quantity-${index}`} type="text" value={item.quantity} className="w-8 text-center border-l border-r" readOnly />
                    <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(1, item.price, index)}>+</button>
                  </div>
                  <span id={`total-${index}`} className="font-medium">Rs {item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="font-semibold text-lg">Subtotal: Rs {order.subtotal || 0}</div>
        <div className="font-semibold text-lg">Estimated Total: Rs {order.subtotal + 100 + 300 || 0}</div> {/* Shipping + Sales Tax */}
      </div>
    </div>
  );
};

export default Package;
