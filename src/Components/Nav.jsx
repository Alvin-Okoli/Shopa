import { memo } from "react";
import { Outlet } from "react-router-dom";


 const Nav = memo(()=>{

    return(
        <>
            <div className="flex shadow p-4 md:px-10 md:py-6 lg:px-20">

                <div className="md:hidden mr-5 pt-1">
                    <img src="burger-menu-svgrepo-com.svg" alt="option" className="inline-block w-6"/>
                </div>

                <div className="font-extrabold text-2xl md:text-5xl">SHOP.CO</div>

                <div className="hidden pt-2 md:flex gap-5 mx-5 mt-2">
                    <div>Shop</div>
                    <div>On sale</div>
                    <div>New Arrivals</div>
                    <div>Brands</div>
                </div>

                <div className="hidden bg-stone-100 shadow rounded-3xl mx-3 px-4 lg:w-[30%] xl:w-[50%] xl:ml-5 lg:flex">
                    <img src="search-svgrepo-com.svg" alt="search" className="inline-block w-6 mx-3"/>
                    <input type="text" placeholder="search for products" className="outline-none w-[90%]"/>
                </div>

                <div className="absolute right-6 flex gap-4 pt-2 md:pt-3 md:mr-10 lg:mr-10 xl:right-4 xl:pt-2">
                    <img src="search-svgrepo-com.svg" alt="search" className="inline-block w-5 lg:hidden"/>
                    <img src="cart-svgrepo-com.svg" alt="cart" className="inline-block w-5"/>
                    <img src="user-svgrepo-com.svg" alt="user" className="inline-block w-5 border-2 rounded-full"/>
                </div>
            </div>
            <Outlet/>
        </>
    )
})

export default Nav