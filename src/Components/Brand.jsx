import { lazy, memo } from "react";
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

const Brands = memo(()=>{
    
    return (
        <section>
            <div className="bg-black h-[100px] w-full flex flex-wrap pt-4 justify-center pr-4 gap-6 gap-y-[1px] col- mb-4">
                <LazyLoadImage src="Group.png" alt="versace" className="h-[23px] w-[100px] inline-block"/>
                <LazyLoadImage src="zara-logo-1.png" alt="zara" className="h-[26px] w-[58px] inline-block"/>
                <LazyLoadImage src="gucci-logo.png" alt="gucci" className="h-[21px] w-[110px] inline-block"/>
                <LazyLoadImage src="prada-logo-1.png" alt="prada"  className="h-[21px] w-[100px] inline-block"/>
                <LazyLoadImage src="calvinklein.png" alt="ck" className="h-[21px] w-[120px] inline-block"/>
            </div>
        </section>
    )
})

export default Brands