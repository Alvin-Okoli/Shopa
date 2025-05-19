import { memo } from "react";
import { NavLink } from "react-router-dom";

const Hero = memo(()=>{
    return (
        <section className="bg-[#f2f0f1] pt-5 md:grid md:grid-cols-6 md:h-[490px]">
                <div className="px-4 pb-3 md:col-span-4 md:z-0 lg:px-24">
                    <div className="font-extrabold text-4xl pt-3 mb-3 md:text-4xl xl:text-6xl">  
                        <div>FIND CLOTHES</div>
                        <div>THAT MATCHES</div>
                        <div>YOUR STYLE</div>
                    </div>
        
                    <div className="text-sm font-extralight md:text-xl">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
        
                    <NavLink to='/category'><button className="w-full mt-6 mb-3 p-3 text-white text-sm bg-black rounded-4xl md:w-1/5 cursor-pointer hover:bg-gray-700 ">Shop Now</button></NavLink>
        
                    <div className="mx-3 md:mx-10">
                        <div className="inline-block border-r-1 border-r-gray-400 px-6 mt-4 w-1/2 md:w-1/3">
                            <div className="text-xl md:text-3xl font-bold">200+</div>
                            <div className="text-xs font-extralight mt-[-2px]">International Brands</div>
                        </div>
        
                        <div className="inline-block px-6 mt-4 w-1/2 md:border-r-1 md:border-r-gray-400 md:w-1/3">
                                <div className="text-xl md:text-3xl font-bold">2,000+</div>
                                <div className="text-xs font-extralight mt-[-2px]">High-Quality Products</div>
                        </div>
        
                        <div className="my-4 text-center md:inline-block md:w-1/3">
                            <div className="text-xl md:text-3xl font-bold">30,000+</div>
                            <div className="text-xs font-extralight mt-[-2px]">Happy Customers</div>
                        </div>
                    </div>
                </div>
        
                <div className="h-[400px] w-full md:col-span-2">
                    <img src="shop.comodels.png" alt="models" className="h-[400px] md:h-[470px]"/>
                </div>
            </section>
    )
})

export default Hero