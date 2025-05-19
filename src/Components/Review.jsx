import { memo, lazy } from "react";
const Rating = lazy(()=> import('@chepchik/react-rating').then(module=>({default: module.Rating})))

const Review = memo(({review, slice, happy, block})=>{

    return(
        <section>
                    <div className='my-4 py-4 px-2'>

                        {happy && <div className='font-extrabold text-3xl w-full text-center mb-8'>
                            <div>OUR HAPPY CUSTOMERS</div>
                        </div>}

                        <div className={block? block : 'scroll overflow-x-auto whitespace-nowrap mx-2 my-4 md:px-20 md:text-center'}>
                            {review.slice(0, slice).map(reviews=>(
                                <div key={reviews.name} className='inline-block border border-gray-300 rounded-3xl px-6 py-4 w-60 h- mx-2 my-2 text-wrap'>
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