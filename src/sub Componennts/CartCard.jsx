import { lazy } from "react"

const LazyLoadImage = lazy(()=>import("react-lazy-load-image-component").then(module=>({default: module.LazyLoadImage})))

function CartCard({cloth}){

    return(
        <div className="px-2 pb-2 my-2 relative border-b-2 border-b-gray-200 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">

            <LazyLoadImage src="Frame32.png" alt="cloth" className="my-auto h-28 lg:col-span-2"/>

            <div className="col-span-2 lg:col-span-4 grid grid-cols-3">
                <div className="col-span-2">
                    <div className="font-bold">Gradient Graphic</div>
                    <div>Size</div>
                    <div>Color</div>
                    <div>Type</div>
                    <div className="text-xl font-semibold">Price</div>
                </div>

                <div className="text-right px-2">
                    <div>delete</div>
                </div>
            </div>

            <div className="absolute right-4 bottom-2">add</div>
        </div>
    )
}

export default CartCard