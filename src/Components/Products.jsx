import { lazy, memo, Suspense } from "react";

const Listings = lazy(()=> import('../Components/Listings'))

const Products = memo(({title, products})=>{

    return(
        <div className="mx-3 my-6">
            <div className="font-bold text-4xl text-center">
                <p>{title}</p>
            </div>

            <div className="overflow-x-auto whitespace-nowrap gap-3 w-auto scroll">
                <Suspense fallback={<div className='text-3xl font-semibold'>Loading</div>}>
                {products.map((product)=>(
                    <Listings key={product.name} product={product}/>
                ))}
                </Suspense>
            </div>

            <div className="flex justify-center">
            <button className='w-full p-2 text-sm border rounded-4xl my-2 hover:bg-gray-800 hover:text-white active:bg-black active:text-white md:w-1/4'>View All</button>
            </div>
            
        </div>
    )
})

export default Products

