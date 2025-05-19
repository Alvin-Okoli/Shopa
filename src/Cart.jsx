import Footer from "./Components/Footer"
import NewsLetter from "./Components/NewsLetter"
import Calculation from "./sub Componennts/Calculation"
import CartCard from "./sub Componennts/CartCard"

function Cart(){

    return(
        <div className="md:px-10 md:py-6 lg:px-24">
            <div className="my-6 mx-2 font-bold text-3xl">Your Cart</div>

            <div className="px-2 mx-auto w-full lg:grid lg:grid-cols-2 gap-x-8 lg:w-5/6">
                <div className="h-auto border border-gray-300 rounded-2xl px-1 py-2 box-border relative w-full lg:w-5/6  max-h-[650px] overflow-y-auto scroll">
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                </div>

                <Calculation/>
            </div>

            <NewsLetter/>
            <Footer/>
        </div>
    )
}
export default Cart