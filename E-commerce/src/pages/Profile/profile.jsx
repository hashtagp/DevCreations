import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <main className="profile mx-auto py-8 px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Profile Section */}
          <div className="bg-blue-300 shadow-md rounded-lg p-6 flex flex-col items-center w-full lg:w-1/3">
            <img src="https://via.placeholder.com/100" alt="User Profile" className="rounded-full w-24 h-24 mb-4" />
            <h2 className="text-lg font-semibold">Bhumika</h2>
            <p className="text-gray-900">8217076134</p>
            <p className="text-gray-900">bhumika@gmail.com</p>
          </div>

          {/* Action Buttons Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/3">
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md transition duration-300">Your Orders</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md transition duration-300">Your Address</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md transition duration-300">Track Your Order</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md transition duration-300">Purchase History</a>
            <a href="/contact" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md transition duration-300">Contact Us</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;