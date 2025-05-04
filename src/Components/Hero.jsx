import { memo } from "react";

const Hero = memo(()=>{
    return (
        <section className="bg-[#f2f0f1] pt-5 md:grid md:grid-cols-2 md:h-[450px]">
                <div className="px-4 pb-3 lg:px-14">
                    <div className="font-extrabold text-4xl pt-3 mb-3 lg:text-6xl xl:text-7xl">  
                        <div>FIND CLOTHES</div>
                        <div>THAT MATCHES</div>
                        <div>YOUR STYLE</div>
                    </div>
        
                    <div className="text-sm font-extralight md:text-xl">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
        
                    <button className="w-full mt-6 mb-3 p-3 text-white text-sm bg-black rounded-4xl md:w-[25%] cursor-pointer">Shop Now</button>
        
                    <div className="mx-3 md:flex">
                        <div className="inline-block border-r-1 border-r-gray-400 px-6 mt-4 w-[50%]">
                            <div className="text-xl font-semibold">200+</div>
                            <div className="text-xs font-extralight mt-[-2px]">International Brands</div>
                        </div>
        
                        <div className="inline-block px-6 mt-4 w-[50%]">
                                <div className="text-xl font-semibold">2,000+</div>
                                <div className="text-xs font-extralight mt-[-2px]">High-Quality Products</div>
                        </div>
        
                        <div className="my-4 text-center">
                            <div className="text-xl font-semibold">30,000+</div>
                            <div className="text-xs font-extralight mt-[-2px]">Happy Customers</div>
                        </div>
                    </div>
                </div>
        
                <div className="h-[400px] w-full md:px-14">
                    <img src="shop.comodels.png" alt="models" className="h-[400px] md:h-[438px] w-full mx-auto"/>
                </div>
            </section>
    )
})

export default Hero