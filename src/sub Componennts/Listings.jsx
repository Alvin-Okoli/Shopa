import { lazy, memo, Suspense } from "react"
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { NavLink } from "react-router-dom"
const Rating = lazy(()=>import('@chepchik/react-rating').then(module=>({default: module.Rating})))

const Listings = memo(({product, style})=>{
    return(
        <>
                <div key={product.name} className={`my-3 w-auto inline-block mx-2 ${style || 'lg:w-1/4'} lg:px-2`}>
                <LazyLoadImage 
                    src={product.frame} 
                    alt={`${product.name} picture`} 
                    className=" w-[198px] h-[200px] md:w-full md:h-[250px]"
                />

                <div className="md:px-2  my-2">
                    <div className="font-semibold text-xl">{product.name}</div>

                    <div className="gap-2 flex">
                    <Suspense fallback={<div>Loading</div>}>
                        <Rating 
                            value={product.rating}
                            fractions={2}
                            emptySymbol={<span style={{ color: "#ffcc00" }}>☆</span>}
                            fullSymbol={<span style={{ color: "#ffcc00" }}>★</span>}
                                    />
                    </Suspense>
                        {product.rating}/5
                    </div>

                    <div className='flex gap-2 text-xl'>
                        <span className="font-bold">{product.price} </span>
                        <span className="font-bold text-gray-400 line-through">{product.oldPrice} </span>
                        {product.discount&& <span className='text-[8px] text-red-500 shadow rounded-4xl bg-red-100 w-10 h-4 text-center pt-0.5 mt-2'>{product.discount}</span>}
                    </div>
                </div>
            </div>
            
        </>
    )
})

export default Listings
