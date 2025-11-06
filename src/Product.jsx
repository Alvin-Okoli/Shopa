import { lazy, Suspense } from "react"

import { SectionLoadingFallback } from "./HomePage"
const Products = lazy(()=> import("./Components/HomeProducts"))
const Footer = lazy(()=>import("./Components/Footer"))
const Review = lazy(()=> import("./Components/Review"))
const Rating = lazy(()=> import('@chepchik/react-rating').then(module=>({default: module.Rating})))
const LazyLoadImage = lazy(()=> import("react-lazy-load-image-component").then(module=>({default: module.LazyLoadImage})))

//Use useEffect to fetch  the tags data.

const Product = ()=>{

    const cloth = {
        name: 'Sleeves Striped T-shirts', 
        rating: 4.5, 
        price: '$130', 
        frame: 'Frame38.png', 
        oldPrice: '$160', 
        discount: '-30%', 
        description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
        color: ['bg-red-200', 'black', 'bg-gray-400', 'bg-blue-500'],
        size: ['small', 'x-large'],
        review : [
            {name: 'Sarah M', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
            {name: 'Emily R', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
            {name: 'David K', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
            {name: 'Sarah', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!", rating: 5},
            {name: 'Sarai', review: "I'm absolutely in love with my new shirt from Shop.co! The quality is top-notch, and the fit is perfect. The customer service team was also super helpful when I had a question about sizing. Highly recommend!" , rating: 5}
        ]
    }

    const tag = [
        {name: 'Vertical striped shirt', rating: 5, price: '$212', frame: 'Frametop1.png', oldPrice: '$232', discount: '-20%'}, 
        {name: 'Courage Graphic T-shirt', rating: 4, price: '$145', frame: 'Frametop2.png'}, 
        {name: 'Loose Fit Bernuda Shorts', rating: 3, price: '$80', frame: 'Frametop3.png'},
        {name: 'Faded Skinny jeans', rating: 4.5, price: '$210', frame: 'Frametop4.png'}
    ]

    return(
        <div className="px-3 md:px-10 md:py-6 lg:px-24">
            <div className="border-b-2 border-b-gray-600 pb-4 md:grid grid-cols-2">

                <div className="md:mt-4 md:grid md:grid-cols-3 lg:px-4 lg:grid-cols-4 lg:gap-x-[-40px]">
                    <LazyLoadImage src={cloth.frame} alt={cloth.name} className="mb-2 h-full cursor-pointer max-h-92 md:col-span-2 lg:col-span-3 lg:w-full"/>

                    <div className="flex gap-2 overflow-auto overflow-x-hidden md:block md:col-span-1 md:py-1 md:overflow-y-hidden max-h-92">
                    <img src={cloth.frame} alt={cloth.name} className="mb-2 w-1/3 md:h-1/3 md:w-full md:px-1 cursor-pointer"/>
                    <img src={cloth.frame} alt={cloth.name} className="mb-2 w-1/3 md:h-1/3 md:w-full md:px-1 cursor-pointer"/>
                    <img src={cloth.frame} alt={cloth.name} className="mb-2 w-1/3 md:h-1/3 md:w-full md:px-1 cursor-pointer"/>                    
                    </div>
                </div>

                <div className="my-2 md:px-2">
                    <div className="font-extrabold text-2xl my-2">{cloth.name}</div>

                    {cloth.rating&& <div className="my-2">
                        {<Rating
                        value={cloth.rating}
                        emptySymbol={<span style={{ color: "#ffcc00" }}>☆</span>}
                        fullSymbol={<span style={{ color: "#ffcc00" }}>★</span>}
                        />}
                        <span className="ml-4">{cloth.rating}/5</span>
                    </div>}

                    <div className="my-2">
                        <span className="mr-2 font-bold">{cloth.price || ''}</span>
                        <span className="mx-2 font-bold text-gray-400 line-through">{cloth.oldPrice || ''}</span>
                        <span className="mx-2 px-3 rounded-2xl text-xs bg-red-100 text-red-600">{cloth.discount || ''}</span>
                    </div>

                    <div className="text-sm font-light my-2">{cloth.description || ''}</div>

                    <div className="py-4 border-b-2 border-b-gray-100">
                    <div className="my-2 text-sm text-gray-500">Select Colors</div>
                    <div className="flex gap-2">
                        {cloth.color.map((colors, index)=>(
                            <span key={index} className={`${colors} rounded-full w-6 h-6 shadow my-2 cursor-pointer`}></span>
                        ))}
                    </div>
                    </div>

                    <div className="py-4 border-b-2 border-b-gray-100">
                        <div className="my-2 text-sm text-gray-500">Choose Size</div>

                        <div>
                        {cloth.size.map((sizes, index)=>(
                            <div key={index} className='my-2 font-normal inline-block shadow bg-gray-200 px-3 rounded-2xl hover:bg-black hover:text-white mr-2  cursor-pointer'>{sizes}</div>
                        ))}
                        </div>
                    </div>

                    <div className='mt-4 mb-6 p-2 mx-auto font-normal w-40 text-center text-sm rounded-2xl hover:bg-gray-500 hover:text-white bg-black text-white  cursor-pointer'>Add to Cart</div>
                </div>
            </div>

            <div>
                <div className="mx-auto text-center pt-2 font-bold">Reviews</div>

                <div>
                    <Review review={cloth.review} slice={6} block='grid grid-cols-1 mx-2  md:text-center md:grid-cols-3 lg:flex '/>
                </div>

                <div className='my-2 p-2 mx-auto font-normal w-48 text-center text-sm border border-gray-300 rounded-2xl hover:bg-gray-500 hover:text-white bg-black text-white cursor-pointer'>Load More Reviews</div>
            </div>

            <div>
                <Suspense fallback={<SectionLoadingFallback/>}>
                    <Products products={tag} title={'YOU MIGHT ALSO LIKE'}/>
                </Suspense>
            </div>

            <Footer/>
        </div>
    )
}

export default Product