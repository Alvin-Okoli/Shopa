import { memo, lazy } from "react";
import {NavLink, Outlet} from 'react-router-dom'
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

const Footer = memo(()=>{

    return(
        <div className="m-4 pb-40">
            <div className="grid grid-cols-2 gap-y-4 mb-5">
                <div className="col-span-2">
                    <p className="text-3xl font-extrabold">SHOP.CO</p>
                    <p className="font-extralight">We have clothes that suits your style and which you will be proud to wear. From women to men.</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg">COMPANY</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg">HELP</p>
                    <p>Customer Support</p>
                    <p>Delievery details</p>
                    <p>T&C</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg">FAQ</p>
                    <p>Account</p>
                    <p>Manage Delieveries</p>
                    <p>Orders</p>
                    <p>Payment</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight">
                    <p className="font-semibold text-lg">RESOURCES</p>
                    <p>Free eBook</p>
                    <p>Development Tutorial</p>
                    <p>How to- Blog</p>
                    <p>Youtube Plylist</p>
                </div>
            </div>

            <hr/>

            <div>
                <div className="text-center my-3">Shop.co &Copy; 2000-2023 Reserved</div>
                <div>
                    <LazyLoadImage/>
                    <LazyLoadImage/>
                    <LazyLoadImage/>
                    <LazyLoadImage/>
                </div>
            </div>
            <Outlet/>
        </div>
    )
})

export default Footer