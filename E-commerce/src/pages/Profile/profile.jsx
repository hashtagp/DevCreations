import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <main className="profile mx-auto py-8 px-6">
        <div className="flex space-x-6">
          {/* Profile Section */}
          <div className="bg-blue-300 shadow-md rounded-lg p-6 flex flex-col items-center w-1/3">
            <img src="https://via.placeholder.com/100" alt="User Profile" className="rounded-full w-24 h-24 mb-4" />
            <h2 className="text-lg font-semibold">Bhumika</h2>
            <p className="text-gray-900">8217076134</p>
            <p className="text-gray-900">bhumika@gmail.com</p>
          </div>

          {/* Action Buttons Section */}
          <div className="grid grid-cols-2 gap-4 w-2/3">
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md">Your Orders</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md">Your Address</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md">Track your order</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md">Purchase history</a>
            <a href="#" className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-8 px-8 text-center rounded-md shadow-md">Contact us</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;