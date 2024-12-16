import React, { useState } from 'react';

const CartPage = () => {
  const [quantities, setQuantities] = useState([3, 2]);
  const prices = [500, 300];

  const updateQuantity = (change, price, index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const calculateTotal = (quantity, price) => quantity * price;

  const subtotal = quantities.reduce((acc, quantity, index) => acc + calculateTotal(quantity, prices[index]), 0);
  const shipping = 100;
  const salesTax = 300;
  const estimatedTotal = subtotal + shipping + salesTax;

  return (
    <div className="bg-white">
      <div className="cart mx-auto px-4 py-8">
        {/* Cart Page Header */}
        <h1 className="text-2xl font-bold mb-6">CART PAGE</h1>

        {/* Cart Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="w-full lg:w-2/3 bg-orange-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <div id="cart-items" className="space-y-6">
              {/* Product Item 1 */}
              <div className="flex flex-wrap items-center justify-between border-b pb-4 rounded-lg p-4">
                <img src="https://via.placeholder.com/150" alt="T-Shirt" className="w-40 h-40 rounded-lg object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-md font-semibold">DEV CUSTOMIZABLE T-SHIRTS</h2>
                  <p className="text-md text-gray-800">SIZE: MEDIUM</p>
                  <p className="text-sm text-gray-800">COLOUR: WHITE</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Rs 500</span>
                  <div className="flex items-center border rounded">
                    <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(-1, 500, 0)}>-</button>
                    <input id="quantity-0" type="text" value={quantities[0]} className="w-8 text-center border-l border-r" readOnly />
                    <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(1, 500, 0)}>+</button>
                  </div>
                  <span id="total-0" className="font-medium">Rs {calculateTotal(quantities[0], 500)}</span>
                </div>
              </div>

              {/* Product Item 2 */}
              <div className="flex flex-wrap items-center justify-between border-b pb-4 rounded-lg p-4">
                <img src="https://via.placeholder.com/150" alt="Calendar" className="w-40 h-40 rounded-lg object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">DEV CUSTOMIZABLE CALENDAR</h2>
                  <p className="text-sm text-gray-500">MODEL: PAPER</p>
                  <p className="text-sm text-gray-500">COLOUR: WHITE</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Rs 300</span>
                  <div className="flex items-center border rounded">
                    <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(-1, 300, 1)}>-</button>
                    <input id="quantity-1" type="text" value={quantities[1]} className="w-8 text-center border-l border-r" readOnly />
                    <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(1, 300, 1)}>+</button>
                  </div>
                  <span id="total-1" className="font-medium">Rs {calculateTotal(quantities[1], 300)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 bg-orange-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">SUMMARY</h2>
            <div className="flex justify-between py-2 font-bold">
              <span>SUBTOTAL</span>
              <span id="subtotal">Rs {subtotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span>Rs {shipping}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Sales Tax</span>
              <span>Rs {salesTax}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>TOTAL:</span>
              <span id="estimated-total">Rs {estimatedTotal}</span>
            </div>
            <button className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;