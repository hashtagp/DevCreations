import React from 'react'

const Signup = () => {
  return (
    <div>
    <div className="flex justify-center items-center px-4 py-10 bg-white">
      <div className="w-full sm:w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold bg-white">
          <i className="fa-solid fa-user bg-white"></i> Login
        </h1>
        <hr className="mt-3" />
        
        {/* Username Field */}
        <div className="mt-3 bg-white">
          <label htmlFor="username" className="block text-base mb-2 bg-white">Username</label>
          <input
            type="text"
            id="username"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white"
            placeholder="Enter Username"
          />
        </div>
  
        {/* Password Field */}
        <div className="mt-3 bg-white">
          <label htmlFor="password" className="block text-base mb-2 bg-white">Password</label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white"
            placeholder="Enter Password"
          />
        </div>
  
        {/* Remember Me and Forgot Password */}
        <div className="mt-3 flex justify-between items-center bg-white">
          <div className="flex items-center bg-white">
            <input type="checkbox" id="remember-me" className="mr-2 bg-white" />
            <label htmlFor="remember-me" className='bg-white'>Remember Me</label>
          </div>
          <div className='bg-white'>
            <a href="#" className="text-indigo-500 font-semibold underline bg-white">Forgot Password?</a>
          </div>
        </div>
  
        {/* Login Button */}
        <div className="mt-5">
          <button className="border-2 border-indigo-500 bg-indigo-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-500 font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Signup
