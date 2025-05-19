
function Calculation(){

    return(
        <div className="h-88 w-5/6 px-4 py-4 my-2 border border-gray-300 rounded-2xl mx-auto">
                <div className="text-2xl font-bold">Order Summary</div>

                <div className="flex justify-between my-2">
                    <div className="font-light">Subtotal</div>
                    <div className="font-semibold">$565</div>
                </div>

                <div className="flex justify-between my-2">
                    <div className="font-light">Discount</div>
                    <div className="font-semibold">-$113</div>
                </div>

                <div className="flex justify-between mt-2 pb-4 border-b-2 border-b-gray-300">
                    <div className="font-light">Delievery Fee</div>
                    <div className="font-semibold">$14</div>
                </div>

                <div className="flex justify-between my-4">
                    <div>Total</div>
                    <div>$467</div>
                </div>

                <div className="flex justify-between gap-2 my-3">
                    <input className="w-4/6 p-2 outline-none rounded-3xl text-center text-sm bg-[#f2f0f1] font-light" placeholder="Promo Code"/>
                    <div className="w-2/6 p-2 border rounded-3xl text-center hover:bg-gray-500 hover:text-white bg-black text-white cursor-pointer">Apply</div>
                </div>

                <div className="mt-8 mb-4 mx-auto w-5/6 border-2 p-3 rounded-4xl text-center font-light flex justify-center gap-4 hover:bg-gray-500 hover:text-white bg-black text-white cursor-pointer">
                    <div>Checkout</div>
                    <div className="">&#x2192;</div>
                </div>
            </div>
    )
}

export default Calculation
