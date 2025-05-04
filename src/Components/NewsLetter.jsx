import { lazy, memo } from "react";
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

const NewsLetter = memo(()=>{

    return(
        <section>
            <div className='bg-black rounded-2xl mx-3 px-5 py-4 my-4'>
                <div className='text-white font-bold text-3xl my-4'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>

                <div className='bg-black'>
                <label>
                    <div className='bg-white rounded-2xl px-2'> 
                        <LazyLoadImage src="email-1-svgrepo-com.svg" className='w-8 inline-block'/>
                        <input type="email" className='inline-block w-[80%] p-3 outline-none' placeholder='Enter your email address'/>
                    </div>
                </label>
                <button className='bg-white w-[100%] my-3 py-3 rounded-2xl text-xl font-semibold cursor-pointer'>Subscribe for offers</button>
                </div>

            </div>
        </section>
    )
})



export default NewsLetter