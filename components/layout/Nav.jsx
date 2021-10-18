import React from 'react';
import image from '../../assets/logo.svg'
import Image from 'next/image'
import BtnPrimary from "./BtnPrimary";

const Nav = () => {
    return (
        <nav className="flex flex-col absolute  w-full z-10">
            <div className="py-4 w-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex items-center justify-between">
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={120}
                    height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <div className="">
                    <a href="/" className="text-black2 font-bold mx-4">Home</a>
                    <a href="/" className="text-black2 font-normal mx-4">Shop</a>
                    <a href="/" className="text-black2 font-normal mx-4">Categories</a>
                    <a href="/" className="text-black2 font-normal mx-4">Blog</a>
                    <a href="/" className="text-black2 font-normal mx-4">Contact</a>
                </div>
                <div>
                    <BtnPrimary
                        title="Crear cuenta"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Nav;
