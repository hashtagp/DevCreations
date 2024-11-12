import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="flex justify-center items-center  px-15 py-10">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Login</h1>
            <hr className="mt-3"/>
            <div className="mt-3">
                <label htmlFor="Username" className="block text-base mb-2">Usename</label>
                <input type="text" id="Username" className="border w-full text-base px-2 py-1 focus:outline-none focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username"/>
            </div>
            <div className="mt-3">
                <label htmlFor="Password" className="block text-base mb-2">Password</label>
                <input type="text" id="Username" className="border w-full text-base px-2 py-1 focus:outline-none focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password"/>
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                    <input type="checkbox"/>
                    <label>Remember Me</label>
                </div>
                <div>
                    <a href="#" className="text-indigo-500 font-semibold underline">Forget Password ?</a>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <button className="border-2 border-indigo-500 bg-indigo-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-500 font-semibold">  Login</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
