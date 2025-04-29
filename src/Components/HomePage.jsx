import {Rating} from '@chepchik/react-rating'

export default function Homepage(){

    const newArrivals = [
        {name: 'T-shirt with Tape', rating: 4.5, price: '$120', frame: 'Frame32.png'}, 
        {name: 'Skinny fit jeans', rating: 3.5, price: '$240', frame: 'Frame58.png', oldPrice: '$260', discount: '-20%'}, 
        {name: 'Checkered shirt', rating: 5, price: '$180', frame: 'Frame34.png'},
        {name: 'Sleeves Striped T-shirt', rating: 4.5, price: '$130', frame: 'Frame38.png', oldPrice: '$160', discount: '-30%'}
    ]

    const topSelling = [
        {name: 'Vertical striped shirt', rating: 5, price: '$212', frame: 'Frametop1.png', oldPrice: '$232', discount: '-20%'}, 
        {name: 'Courage Graphic T-shirt', rating: 4, price: '$145', frame: 'Frametop2.png'}, 
        {name: 'Loose Fit Bernuda Shorts', rating: 3, price: '$80', frame: 'Frametop3.png'},
        {name: 'Faded Skinny jeans', rating: 4.5, price: '$210', frame: 'Frametop4.png'}
    ]

    const styles = [
        {name: 'Casual', frame: 'style1.png'},
        {name: 'Formal', frame: 'style2.png'},
        {name: 'Party', frame: 'style3.png'},
        {name: 'Gym', frame: 'style4.png'}
    ]

    const review = [
        {
            name: 'Sarah M', 
            review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", 
            rating: 5
        },
        {
            name: 'Emily R', 
            review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", 
            rating: 5
        },
        {
            name: 'David K', 
            review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", 
            rating: 5
        },
        {
            name: 'Sarah M', 
            review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", 
            rating: 5
        },
        {
            name: 'Sarah M', 
            review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!" , 
            rating: 5
        }
    ]

    return(
        <>
            <div>
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

                    <div className="h-[400px] w-full bg-[public/shop.comodels.png] md:px-14">
                        <img src="shop.comodels.png" alt="models" className="h-[400px] md:h-[438px] w-[100%] mx-auto"/>
                    </div>
                </section>

                <section>
                    <div className="bg-black h-[100px] w-full flex flex-wrap pt-4 justify-center pr-4 gap-6 gap-y-[1px] col- mb-4">
                        <img src="Group.png" alt="versace" className="h-[23px] w-[100px] inline-block"/>
                        <img src="zara-logo-1.png" alt="zara" className="h-[26px] w-[58px] inline-block"/>
                        <img src="gucci-logo.png" alt="gucci" className="h-[21px] w-[110px] inline-"/>
                        <img src="prada-logo-1.png" alt="prada"  className="h-[21px] w-[100px] inline-block"/>
                        <img src="calvinklein.png" alt="ck" className="h-[21px] w-[120px] inline-block"/>
                    </div>
                </section>

                <section>
                    <div className="mx-3 my-6">
                        <div className="font-bold text-4xl text-center">
                            <p>NEW ARRIVALS</p>
                        </div>

                        <div className="overflow-x-auto whitespace-nowrap gap-3 w-auto scroll">
                            {newArrivals.map((arrival)=>(
                                <div key={arrival.name} className="my-3 w-auto inline-block mx-2">
                                    <img src={arrival.frame} alt={`${arrival.name} picture`} className=" w-[198px] h-[200px]"/>

                                    <div className="font-semibold text-xl">{arrival.name}</div>

                                    <div className="gap-2 flex">
                                        <Rating 
                                            value={arrival.rating}
                                            rating={arrival.rating} 
                                            fractions={2}
                                            emptySymbol={<span style={{ color: "#ffcc00" }}>☆</span>}
                                            fullSymbol={<span style={{ color: "#ffcc00" }}>★</span>}
                                        />
                                        {arrival.rating}/5
                                    </div>

                                    <div>
                                        <div className='flex gap-2 text-xl'>
                                            {arrival.price} 
                                            <span >{arrival.oldPrice} </span>
                                            {arrival.discount&& <span className='text-[8px] text-red-500 shadow rounded-4xl bg-red-100 w-10 h-4 text-center pt-0.5 mt-2'>{arrival.discount}</span>}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                        <button className='w-full p-2 text-sm border rounded-4xl my-2 hover:bg-gray-800 hover:text-white active:bg-black active:text-white md:w-[25%]'>View All</button>
                        </div>
                        
                    </div>
                    
                    <div>
                        <div className="font-bold text-4xl text-center">
                            <p>TOP SELLING</p>
                        </div>

                        <div className="scroll overflow-x-auto whitespace-nowrap gap-3 w-auto">
                            {topSelling.map((item)=>(
                                <div key={item.name} className="my-3 w-auto inline-block mx-2">
                                    <img src={item.frame} alt={`${item.name} picture`} className=" w-[198px] h-[200px]"/>

                                    <div className="font-semibold text-xl">{item.name}</div>

                                    <div className="gap-2 flex">
                                        <Rating 
                                            value={item.rating}
                                            rating={item.rating} 
                                            fractions={2}
                                            emptySymbol={<span style={{ color: "#ffcc00" }}>☆</span>}
                                            fullSymbol={<span style={{ color: "#ffcc00" }}>★</span>}
                                        />
                                        {item.rating}/5
                                    </div>

                                    <div>
                                        <div className='flex gap-2 text-xl'>
                                            {item.price} 
                                            <span >{item.oldPrice} </span>
                                            {item.discount&& <span className='text-[8px] text-red-500 shadow rounded-4xl bg-red-100 w-10 h-4 text-center pt-0.5 mt-2'>{item.discount}</span>}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                        
                        <div className="flex justify-center">
                        <button className='w-full p-2 text-sm border rounded-4xl my-2 hover:bg-gray-800 hover:text-white active:bg-black active:text-white md:w-[25%]'>View All</button>
                        </div>
                    </div>

                </section>

                <section className=''>
                    <div className='py-8 bg-[#f2f0f1] rounded-2xl mt-4'>

                        <div className="font-extrabold text-4xl text-center pb-3">
                            <p>BROWSE BY</p>
                            <p>DRESS STYLE</p>
                        </div>
                    

                        <div>
                            {styles.map(style=>(
                                <div className='flex justify-between my-2 mx-4 shadow rounded-3xl bg-white w-auto overflow-hidden'>
                                    <div className='text-3xl font-semibold mt-[10%] ml-[5%]'>{style.name}</div>
                                    <img src={style.frame} alt={style.name} className='mx-5 w-[230px] h-[150px] mr-0'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className='my-4 py-4 px-2'>

                        <div className='flex justify-between px-3 relative'>
                            <div className='font-extrabold text-3xl w-[70%]'>OUR HAPPY CUSTOMERS</div>
                            <div className='text-4xl absolute right-2 bottom-0'>
                                <span> &#x2190;</span>
                                <span>&#x2192;</span>
                            </div>
                        </div>

                        <div className='scroll overflow-x-auto whitespace-nowrap mx-2 my-4'>
                            {review.map(reviews=>(
                                <div className='inline-block border border-gray-300 rounded-3xl px-6 py-4 w-60 h- mx-2 text-wrap'>
                                    <Rating
                                    value={reviews.rating}
                                    emptySymbol={<span style={{ color: "#ffcc00" }}>☆</span>}
                                    fullSymbol={<span style={{ color: "#ffcc00" }}>★</span>}
                                    />
                                    <div className='font-semibold my-2'>{reviews.name}</div>
                                    <div className='font-light'>"{reviews.review}"</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className='bg-black rounded-2xl mx-3 px-5 py-4 my-4'>
                        <div className='text-white font-bold text-3xl my-4'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>

                        <div className='bg-black'>
                        <label>
                            <div className='bg-white rounded-2xl px-2'> 
                                <img src="email-1-svgrepo-com.svg" className='w-8 inline-block'/>
                                <input type="email" className='inline-block w-[80%] p-3 outline-none' placeholder='Enter your email address'/>
                            </div>
                        </label>
                        <button className='bg-white w-[100%] my-3 py-3 rounded-2xl text-xl font-semibold cursor-pointer'>Subscibe for offers</button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}