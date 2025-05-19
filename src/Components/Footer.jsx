import { memo, lazy } from "react";
import {NavLink, Outlet} from 'react-router-dom'
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

const Footer = memo(()=>{

    return(
        <footer className="m-4 pb-10 lg:px-24 md:mt-10">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-4 mb-5 md:mb-10">
                <div className="col-span-2">
                    <p className="text-3xl font-extrabold my-4">SHOP.CO</p>
                    <p className="font-extralight whitespace-normal">We have clothes that suits your style and which you will be proud to wear. From women to men.</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg md:my-4">COMPANY</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg md:my-4">HELP</p>
                    <p>Customer Support</p>
                    <p>Delievery details</p>
                    <p>T&C</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg md:my-4">FAQ</p>
                    <p>Account</p>
                    <p>Manage Delieveries</p>
                    <p>Orders</p>
                    <p>Payment</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg md:my-4">RESOURCES</p>
                    <p>Free eBook</p>
                    <p>Development Tutorial</p>
                    <p>How to- Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>

            <hr/>

            <div>
                <div className="text-center my-3 md:mt-20">Shop.co &copy; 2000-2025 Reserved</div>
                <div>
                    <LazyLoadImage/>
                    <LazyLoadImage/>
                    <LazyLoadImage/>
                    <LazyLoadImage/>
                </div>
            </div>
            <Outlet/>
        </footer>
    )
})

export default Footer