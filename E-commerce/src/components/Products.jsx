import React from 'react'
import './Products.css'
import clothes from '../assets/t_shirt.png'
import cap from '../assets/cap.png'
import bag from '../assets/bag.png'
import bottle from '../assets/bottle.png'
import mug from '../assets/mug.png'
import hoodie from '../assets/clothes 2.1.png'
import clothes3 from '../assets/clothes 3.png'
import nameBoard from '../assets/name board.png'


const Products = () => {
  return (
      <div
                class="categories bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* <!-- Category 1 --> */}
                <div class="items bg-white border rounded-lg shadow p-4 flex">
                    <h3 class="font-semibold text-lg">Clothing</h3>
                    <img src={clothes} alt="Clothing"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Stylish and comfortable clothing
                        for all occasions.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹200.00<br/></span>
                        <a href="#clothing"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>

                {/* <!-- Category 2 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Cap</h3>
                    <img src={cap} alt="Cap"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Complete your look with our trendy
                        accessories.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹150.00<br/></span>
                        <a href="#cap"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>

                {/* <!-- Category 3 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Bags</h3>
                    <img src={bag} alt="Bags"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Functional and stylish bags for
                        every need.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹200.00<br/></span>
                        <a href="#bags"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>

                {/* <!-- Category 4 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Bottle</h3>
                    <img src={bottle} alt="bottle"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Water Bottle for all your
                        adventures.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹700.00<br/></span>
                        <a href="#Bottle"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>
                {/* <!-- Category 5 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Mug</h3>
                    <img src={mug} alt="mug"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Coffe Mug for all your daylife.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹300.00<br/></span>
                        <a href="#mug"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>
                {/* <!-- Category 6 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Hoodie</h3>
                    <img src={hoodie} alt="hoddie"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Stylish and comfortable clothing
                        for all occasions.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹500.00<br/></span>
                        <a href="#Hoodie"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>
                {/* <!-- Category 7 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Clothing</h3>
                    <img src={clothes3} alt="clothing"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Stylish and comfortable clothing
                        for all occasions.</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹200.00<br/></span>
                        <a href="#clothing"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>
                {/* <!-- Category 8 --> */}
                <div class="items bg-white border rounded-lg shadow p-4">
                    <h3 class="font-semibold text-lg">Name Board</h3>
                    <img src={nameBoard} alt="Name Board"
                        class="w-full h-40 object-cover mb-2"/>
                    <p class="text-gray-600">Name Board for your new offfice</p>
                    <div class="mt-2">
                        <span
                            class="text-xl font-bold text-red-600">₹1000.00<br/></span>
                        <a href="#Name_Board"
                            class="block mt-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded py-1">Shop
                            Now</a>
                    </div>
                </div>
    </div>
  )
}

export default Products
