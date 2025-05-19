import { lazy, memo, Suspense } from "react";
import { NavLink } from "react-router-dom";

const Listings = lazy(()=> import('../sub Componennts/Listings'))

const Products = memo(({title, products})=>{

    return(
        <div className="mx-3 my-6">
            <div className="font-bold text-4xl text-center md:my-4">
                <p>{title}</p>
            </div>

            <div className="overflow-x-auto whitespace-nowrap w-auto scroll md:my-4 md:px-10 lg:px-20">
                <Suspense fallback={<div className='text-3xl font-semibold'>Loading</div>}>
                <NavLink to='/cloth'>
                    {products.slice(0, 4).map((product)=>(
                    <Listings key={product.name} product={product}/>
                ))}
                </NavLink>
                </Suspense>
            </div>

            <div className="flex justify-center md:my-4">
            <button className='w-full p-2 text-sm border rounded-4xl my-2 hover:bg-gray-500 hover:text-white bg-black text-white md:w-1/8 cursor-pointer'>View All</button>
            </div>
            
        </div>
    )
})

export default Products

