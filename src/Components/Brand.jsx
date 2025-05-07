import { lazy, memo } from "react";
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

const Brands = memo(()=>{
    
    return (
        <section>
            <div className="bg-black h-[100px] w-full flex flex-wrap pt-4 justify-center pr-4 gap-6 gap-y-[1px] mb-4 md:justify-between md:px-28 md:flex-nowrap">
                <LazyLoadImage src="Group.png" alt="versace" className="h-[23px] w-[100px] inline-block md:w-60 md:h-12 md:mt-2"/>
                <LazyLoadImage src="zara-logo-1.png" alt="zara" className="h-[26px] w-[58px] inline-block md:w-32 md:h-12 md:mt-2"/>
                <LazyLoadImage src="gucci-logo.png" alt="gucci" className="h-[21px] w-[110px] inline-block md:w-60 md:h-12 md:mt-2"/>
                <LazyLoadImage src="prada-logo-1.png" alt="prada"  className="h-[21px] w-[100px] inline-block md:w-60 md:h-12 md:mt-2"/>
                <LazyLoadImage src="calvinklein.png" alt="ck" className="h-[21px] w-[120px] inline-block md:w-60 md:h-12 md:mt-2"/>
            </div>
        </section>
    )
})

export default Brands