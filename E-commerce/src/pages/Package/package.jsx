import React from 'react';

const Package = () => {
  const updateQuantity = (change, price, index) => {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const totalSpan = document.getElementById(`total-${index}`);
    const subtotalSpan = document.getElementById("subtotal");
    const estimatedTotalSpan = document.getElementById("estimated-total");

    let quantity = parseInt(quantityInput.value) + change;
    if (quantity < 0) quantity = 0;

    quantityInput.value = quantity;
    const total = quantity * price;
    totalSpan.textContent = `Rs ${total}`;

    // Update subtotal and estimated total
    let subtotal = 0;
    const totals = document.querySelectorAll("[id^='total-']");
    totals.forEach((item) => {
      subtotal += parseInt(item.textContent.replace("Rs ", ""));
    });

    subtotalSpan.textContent = `Rs ${subtotal}`;
    const estimatedTotal = subtotal + 100 + 300; // Shipping + Sales Tax
    estimatedTotalSpan.textContent = `Rs ${estimatedTotal}`;
  };

  return (
    <div className="package mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">TRACK YOUR PACKAGE</h1>
      <p className="text-gray-600 mb-4">Estimated Delivery: <span className="font-bold">21 June 2024</span></p>

      <div className="bg-blue-200 p-8 rounded-lg shadow-md mb-8">
        <div className="justify-between items-center relative">
          <div className="flex-1 text-center relative">
            <div className="w-8 h-8 mx-auto bg-orange-500 rounded-full"></div>
            <p className="mt-2 text-sm font-semibold">Ordered</p>
            <p className="text-xs text-gray-500">Tue, 10 June</p>
          </div>
          <div className="absolute left-1/3 top-4 w-1/3 h-1 bg-orange-500"></div>
          <div className="flex-1 text-center relative">
            <div className="w-8 h-8 mx-auto bg-orange-500 rounded-full"></div>
            <p className="mt-2 text-sm font-semibold">Shipped</p>
            <p className="text-xs text-gray-500">Thu, 13 June</p>
          </div>
          <div className="absolute left-2/3 top-4 w-1/3 h-1 bg-gray-300"></div>
          <div className="flex-1 text-center relative">
            <div className="w-8 h-8 mx-auto bg-gray-300 rounded-full"></div>
            <p className="mt-2 text-sm font-semibold text-gray-400">Delivered</p>
            <p className="text-xs text-gray-400">Thu, 13 June</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 bg-orange-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <div id="cart-items" className="space-y-6">
            <div className="flex flex-wrap items-center justify-between border-b pb-4 bg-orange-200 rounded-lg p-4">
              <img src="https://via.placeholder.com/150" alt="T-Shirt" className="w-48 h-48 rounded-lg object-cover" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">DEV CUSTOMIZABLE T-SHIRTS</h2>
                <p className="text-sm text-gray-800">SIZE: MEDIUM</p>
                <p className="text-sm text-gray-800">COLOUR: WHITE</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">Rs 500</span>
                <div className="flex items-center border rounded">
                  <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(-1, 500, 0)}>-</button>
                  <input id="quantity-0" type="text" value="3" className="w-8 text-center border-l border-r" readOnly />
                  <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(1, 500, 0)}>+</button>
                </div>
                <span id="total-0" className="font-medium">Rs 1500</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between border-b pb-4 bg-orange-200 rounded-lg p-4">
              <img src="https://via.placeholder.com/150" alt="Calendar" className="w-48 h-48 rounded-lg object-cover" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">DEV CUSTOMIZABLE CALENDER</h2>
                <p className="text-sm text-gray-800">MODEL: PAPER</p>
                <p className="text-sm text-gray-800">COLOUR: WHITE</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">Rs 300</span>
                <div className="flex items-center border rounded">
                  <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(-1, 300, 1)}>-</button>
                  <input id="quantity-1" type="text" value="2" className="w-8 text-center border-l border-r" readOnly />
                  <button className="px-2 py-1 text-gray-600" onClick={() => updateQuantity(1, 300, 1)}>+</button>
                </div>
                <span id="total-1" className="font-medium">Rs 600</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-orange-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">SUMMARY</h2>
          <div className="flex justify-between py-2">
            <span>SUBTOTAL</span>
            <span id="subtotal">Rs 2100</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>Rs 100</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Sales Tax</span>
            <span>Rs 300</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>ESTIMATED TOTAL:</span>
            <span id="estimated-total">Rs 2500</span>
          </div>
          <button className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Package;