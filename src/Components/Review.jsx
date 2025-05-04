import { memo, lazy } from "react";
const Rating = lazy(()=> import('@chepchik/react-rating').then(module=>({default: module.Rating})))

const Review = memo(({review})=>{

    return(
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
                                <div key={reviews.name} className='inline-block border border-gray-300 rounded-3xl px-6 py-4 w-60 h- mx-2 text-wrap'>
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
    )
})

export default Review