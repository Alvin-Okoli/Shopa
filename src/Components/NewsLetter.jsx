import { lazy, memo } from "react";
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

const NewsLetter = memo(()=>{

    return(
        <section>
            <div className='bg-black rounded-2xl mx-3 px-5 py-4 my-4 md:flex md:w-5/6 md:mx-auto md:gap-48 lg:px-28 md:h-46 md:pt-4 lg:pt-8'>
                <div className='text-white font-bold text-3xl my-4 lg:text-5xl md:wrap-break-word md:my-1 md:w-2/4'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>

                <div className='bg-black md:w-1/3 md:pt-2'>
                <label>
                    <div className='bg-white rounded-4xl px-2 md:w-full md:px-6'> 
                        <LazyLoadImage src="email-1-svgrepo-com.svg" className='w-8 inline-block md:hidden lg:inline-block'/>
                        <input type="email" className='inline-block w-[80%] p-3 outline-none md:' placeholder='Enter your email address'/>
                    </div>
                </label> 
                <button className='bg-white w-[100%] my-3 py-3 rounded-4xl text-xl font-semibold cursor-pointer hover:text-white hover:bg-gray-400'>Subscribe</button>
                </div>

            </div>
        </section>
    )
})



export default NewsLetter