import { memo, lazy } from "react";
const LazyLoadImage = lazy(()=> import("react-lazy-load-image-component").then(module=>({default: module.LazyLoadImage})));

const Styles = memo(({styles})=>{

    return(
        <>
            <div className='py-8 bg-[#f2f0f1] rounded-2xl mt-4'>

                <div className="font-extrabold text-4xl text-center pb-3 md:flex md:py-10 md:justify-center">
                    <p>BROWSE BY</p>
                    <p>DRESS STYLE</p>
                </div>
            

                <div className="md:grid md:grid-cols-2 md:px-20">
                    {styles.map((style, index)=>(
                        <div key={`${style.name}-${index}`} className='flex justify-between my-2 mx-4 shadow rounded-3xl bg-white w-auto overflow-hidden'>
                            <div className='text-3xl font-semibold mt-[10%] ml-[5%]'>{style.name}</div>
                            <LazyLoadImage src={style.frame} alt={style.name} className='mx-5 w-[230px] h-[150px] mr-0'/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
})

export default Styles
