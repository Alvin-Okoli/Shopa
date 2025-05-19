import { memo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


 const Nav = memo(()=>{

    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = ()=>{
        if(dropDown){
            setDropDown(false)
        }else setDropDown(true)
    }

    return(
        <nav className="relative">
            <div className="flex shadow p-4 md:px-10 md:py-6 lg:px-24">

                <div className="md:hidden mr-5 pt-1">
                    <img src="burger-menu-svgrepo-com.svg" alt="option" className="inline-block w-6" onClick={handleDropDown}/>
                </div>
                
                <NavLink to='/'>
                    <div className="font-extrabold text-2xl md:text-5xl cursor-pointer">SHOP.CO</div>
                </NavLink>

                <div className="hidden pt-2 md:flex gap-5 mx-5 mt-2">
                    <NavLink to='/category'><div className=" cursor-pointer hover:text-gray-600">Shop</div></NavLink>
                    <NavLink><div className=" cursor-pointer hover:text-gray-600">On sale</div></NavLink>
                    <NavLink><div className=" cursor-pointer hover:text-gray-600">New Arrivals</div></NavLink>
                    <NavLink><div className=" cursor-pointer hover:text-gray-600">Brands</div></NavLink>
                </div>

                <div className="hidden bg-stone-100 shadow rounded-3xl mx-3 px-4 lg:w-[30%] xl:w-[50%] xl:ml-5 lg:flex">
                    <img src="search-svgrepo-com.svg" alt="search" className="inline-block w-6 mx-3"/>
                    <input type="text" placeholder="search for products" className="outline-none w-[90%]"/>
                </div>

                <div className="absolute right-6 flex gap-4 pt-2 md:pt-3 md:mr-10 lg:mr-10 xl:right-4 xl:pt-2">
                    <img src="search-svgrepo-com.svg" alt="search" className="inline-block w-5 lg:hidden cursor-pointer"/>
                    <img src="cart-svgrepo-com.svg" alt="cart" className="inline-block w-5 cursor-pointer"/>
                    <img src="user-svgrepo-com.svg" alt="user" className="inline-block w-5 border-2 rounded-full cursor-pointer"/>
                </div>
            </div>
            
            {dropDown&& 
            <div className="py-2 px-5 absolute bg-white w-full">
                <div className=" cursor-pointer hover:text-gray-600">Shop</div>
                <div className=" cursor-pointer hover:text-gray-600">On sale</div>
                <div className=" cursor-pointer hover:text-gray-600">New Arrivals</div>
                <div className=" cursor-pointer hover:text-gray-600">Brands</div>
            </div>}
            <Outlet/>
        </nav>
    )
})

export default Nav