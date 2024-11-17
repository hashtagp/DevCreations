import React from 'react'
import card from "../../assets/icons8-credit-card-50.png"
import gpay from "../../assets/icons8-google-pay-50.png"
import netBanking from "../../assets/net bank.jpg"
import phonepe from "../../assets/PhonePe-Logo.wine.png"

const Payment = () => {
  return (
    <div className="payment">
    <p className="px-4 py-2 text-slate-500 font-semibold text-sm text-center">RECOMMENDED</p>
    <div className="payment-ways flex flex-col items-center justify-center text-center">
        
        {/* Cash on Delivery/Pay on Delivery */}
        <div className="w-80 px-4 mb-4">
            <div className="w-full h-[55px] rounded-md border-gray-300 border-2 flex items-center px-2">
                <input type="radio" name="payment-method" className="mr-2"/>
                <p className="text-lg px-2">Cash on Delivery/Pay on Delivery</p>
            </div>
        </div>

        {/* Phone Pay */}
        <div className="w-80 px-4 mb-4">
            <div className="w-full h-[55px] rounded-md border-gray-300 border-2 flex items-center px-2">
                <input type="radio" name="payment-method" className="mr-2"/>
                <p className="text-lg px-2 flex justify-center items-center">
                    Phone Pay <img className="h-10 ml-2" src={phonepe} alt="Phone Pay" />
                </p>
            </div>
        </div>

        {/* Google Pay */}
        <div className="w-80 px-4 mb-4">
            <div className="w-full h-[55px] rounded-md border-gray-300 border-2 flex items-center px-2">
                <input type="radio" name="payment-method" className="mr-2"/>
                <p className="text-lg px-2 flex justify-center items-center">
                    Google Pay <img className="h-6 ml-2" src={gpay} alt="Google Pay" />
                </p>
            </div>
        </div>

        <p className="px-4 py-2 text-slate-500 font-semibold text-sm text-center">CREDIT & DEBIT CARDS</p>
        
        {/* Credit & Debit Cards */}
        <div className="w-80 px-4 mb-4">
            <div className="w-full h-[55px] rounded-md border-gray-300 border-2 flex items-center px-2">
                <input type="radio" name="payment-method" className="mr-2"/>
                <p className="text-lg px-2 flex justify-center items-center">
                    Credit & Debit Cards <img className="h-6 ml-2" src={card} alt="Credit & Debit Cards" />
                </p>
            </div>
        </div>

        <p className="px-4 py-2 text-slate-500 font-semibold text-sm text-center">MORE WAYS TO PAY</p>
        
        {/* EMI */}
        <div className="w-80 px-4 mb-4">
            <div className="w-full h-[45px] rounded-md border-gray-300 border-2 flex items-center px-2">
                <input type="radio" name="payment-method" className="mr-2"/>
                <p className="text-lg px-2 flex justify-center items-center">
                    EMI <img className="h-6 ml-2" src={card} alt="EMI" />
                </p>
            </div>
        </div>

        {/* Net Banking */}
        <div className="w-80 px-4 mb-4">
            <div className="w-full h-[45px] rounded-md border-gray-300 border-2 flex items-center px-2">
                <input type="radio" name="payment-method" className="mr-2"/>
                <p className="text-lg px-2 flex justify-center items-center">
                    Net Banking <img className="h-6 ml-2" src={netBanking} alt="Net Banking" />
                </p>
            </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mt-5">
            <div className="bg-orange-300 hover:bg-orange-500 rounded-2xl border-t-0 h-10 w-80 font-semibold flex justify-center items-center cursor-pointer">
                <p className="font-normal">Continue</p>
            </div>
        </div>
    </div>
</div>


  )
}

export default Payment
