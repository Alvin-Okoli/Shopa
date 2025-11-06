import { memo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


 const Nav = memo(()=>{
    // dropDown handler function
    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = ()=>{
        setDropDown(!dropDown)
    }

    //search drop down
    const [searchropDown, setSearchDropDown] = useState(false);
    const handlesearchDropDown = ()=>{
        setSearchDropDown(!searchropDown)
    }

    const data = [
        {
            name: "T-Shirt",
            size: "Medium",
            brand: "Nike",
            color: "Blue"
        },
        {
            name: "Jeans",
            size: "32",
            brand: "Levi's",
            color: "Black"
        },
        {
            name: "Sweater",
            size: "Large",
            brand: "Gucci",
            color: "Red"
        },
        {
            name: "Dress",
            size: "Small",
            brand: "Zara",
            color: "Green"
        },
        {
            name: "Jacket",
            size: "XL",
            brand: "The North Face",
            color: "Brown"
        },
        {
            name: "Sneakers",
            size: "10",
            brand: "Adidas",
            color: "White"
        },
        {
            name: "Hoodie",
            size: "Medium",
            brand: "Champion",
            color: "Gray"
        },
        {
            name: "Skirt",
            size: "Medium",
            brand: "H&M",
            color: "Purple"
        },
        {
            name: "Socks",
            size: "One Size",
            brand: "Calvin Klein",
            color: "Black"
        },
        {
            name: "Hat",
            size: "One Size",
            brand: "New Era",
            color: "Blue"
        }
    ];

    // search handler
    const [searchValue, setSearchValue] = useState('')
    const searchHandler = (e)=> {
        setSearchValue(e.target.value)
    }

    const filteredSearchData = data.filter((datas)=>{
        if (searchValue === '') return false; 
        const nameMatch = datas.name.toLowerCase().includes(searchValue.toLowerCase());
        const brandMatch = datas.brand.toLowerCase().includes(searchValue.toLowerCase());
        const colorMatch = datas.color.toLowerCase().includes(searchValue.toLowerCase());
        return nameMatch || brandMatch || colorMatch
    })

    return(
        <>
            <nav className="relative">
                <div className="flex shadow p-4 md:px-10 md:py-6 lg:px-24">

                    {/* dropdown options */}
                    <div className="md:hidden mr-5 pt-1">
                        <img src="burger-menu-svgrepo-com.svg" alt="option" className="inline-block w-6" onClick={handleDropDown}/>
                    </div>
                    
                    {/* Logo */}
                    <NavLink to='/'>
                        <div className="font-extrabold text-2xl md:text-5xl cursor-pointer">SHOP.CO</div>
                    </NavLink>


                    {/* Navigation options full screen*/}
                    <div className="hidden pt-2 md:flex gap-5 mx-5 mt-2">
                        <NavLink to='/category'><div className=" cursor-pointer hover:text-gray-600">Shop</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">On sale</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">New Arrivals</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">Brands</div></NavLink>
                    </div>

                    {/* Search section*/}
                    <div className="hidden bg-stone-100 shadow rounded-3xl mx-3 px-4 lg:w-[30%] xl:w-[50%] xl:ml-5 lg:flex">
                        <img src="search-svgrepo-com.svg" alt="search" className="inline-block w-6 mx-3"/>
                        <input type="text" placeholder="search for products" className="outline-none w-[90%]"/>
                    </div>

                    {/* icon options */}
                    <div className="absolute right-6 flex gap-4 pt-1 md:pt-3 md:mr-10 lg:mr-10 xl:right-4 xl:pt-2">
                        <button onClick={handlesearchDropDown}>
                            <img src='search-svgrepo-com.svg' alt="search" className="inline-block w-5 lg:hidden cursor-pointer"/>
                        </button>

                        <NavLink to={'/cart'}>
                            <img src="cart-svgrepo-com.svg" alt="cart" className="inline-block w-5 cursor-pointer"/>
                        </NavLink>

                        <img src="user-svgrepo-com.svg" alt="user" className="inline-block w-5 cursor-pointer"/>
                    </div>
                </div>

                {/* Navigation drop down options small screen*/}            
                {dropDown&& 
                    <div className="py-2 px-5 absolute bg-white w-full">
                        <NavLink to='/category'><div className=" cursor-pointer hover:text-gray-600">Shop</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">On sale</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">New Arrivals</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">Brands</div></NavLink>
                        <NavLink><div className=" cursor-pointer hover:text-gray-600">Cart</div></NavLink>
                    </div>
                }

                {searchropDown&&

                    <div className="fixed h-full w-full bg-white z-20">
                        {/*search input & close button for search dropdown */}
                        <div className="mx-2 border rounded-xl pb-2">
                            <input 
                                type="text" 
                                placeholder="search for products" 
                                className=" w-[90%] mt-1 px-4 outline-none text-"
                                onChange={searchHandler}
                                value={searchValue}
                            />
                            <button onClick={()=>setSearchDropDown(false)}>
                                <img src="cancel-blacksvgrepo-com.svg" alt="" className=" inline-block w-5 lg:hidden cursor-pointer"/>
                            </button>
                        </div>

                        {/*search results*/}
                        <div className="mt-5 mx-2">
                            {filteredSearchData.length > 0 ?
                                <ul className="list-inside list-none pl-5">
                                    {filteredSearchData.map((item, index) => (
                                        <li key={index} className="">{item.brand} {item.name}</li>
                                    ))}
                                </ul>
                                : 
                                searchValue.length>0?
                                <p className="text-gray-500">No results found</p>
                                :
                                <p className="text-gray-500 mx-2">Start typing to search for products</p>
                            }
                        </div>
                    </div>
                }
                <Outlet/>
            </nav>
        </>
    )
})

export default Nav