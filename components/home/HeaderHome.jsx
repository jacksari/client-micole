import React from 'react';
import BtnPrimary from '../layout/BtnPrimary';
import BtnSecondary from '../layout/BtnSecondary';

const HeaderHome = () => {
    return (
        <header className="flex flex-col bg-gray-100 h-screen">

            <div className="relative bg-white flex-1 bg-hero-header bg-no-repeat bg-right bg-contain pt-7">
                <div className="h-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex flex-col justify-center">
                    <h1 className="text-6xl w-1/2 font-bold text-black">Check out our Best Weekly Prices</h1>
                    <h2 className="py-4 text-black2 text-2xl w-1/2 font-normal">Pellentesque et justo lorem. Proin hendrerit, velit vitae vehicula vulputate</h2>
                    <div className="">
                        <BtnPrimary title="View Sale"/>
                        <BtnSecondary title="Shop all"/>
                    </div>
                </div>

                <div className="flex bg-yellow-400 absolute right-0 bottom-36  rounded-l-full">
                    <div className="w-56 pl-8 py-8">
                        <p className="font-bold mb-2 w-36">Weekly Veggie Bundle</p>
                        <span className="font-light text-sm">*3 lb (4 bunches of greens, various vegetables and fruits)</span>
                    </div>
                    <div className="w-36 mt-2 bg-oval-placeholder bg-cover bg-no-repeat flex flex-col items-end justify-center pl-8 pr-4 py-8">
                        <p className=" bg-white px-2 rounded-full text-lg mb-3 line-through font-bold">$80.00</p>
                        <span className="text-3xl text-red-500 font-bold">$49.99</span>
                    </div>
                </div>
            </div>
            <div className="h-1/6  relative">
                <div className="mx-auto max-w-6xl sm:px-6 lg:px-8   absolute bottom-0 left-0 right-0">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="shadow-md bg-product bg-cover h-52 rounded-lg my-4 relative cursor-pointer">
                            <div className="absolute w-full h-full flex items-center justify-end">
                                <div className="bg-yellow-400 bg-oval-placeholder bg-right bg-contain bg-no-repeat p-4 rounded-l-full">
                                    <p className="font-bold">Weekly Veggie Bundle</p>
                                    <div className="flex items-center justify-center">
                                        <p className=" bg-white px-2 rounded-full text-sm mr-2 line-through font-bold">$80.00</p>
                                        <span className="text-xl text-red-500 font-bold">$49.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md bg-product bg-cover h-52 rounded-lg h-full relative cursor-pointer">
                            <div className="absolute w-full h-full flex items-center justify-end">
                                <div className="bg-yellow-400 bg-oval-placeholder bg-right bg-contain bg-no-repeat p-4 rounded-l-full">
                                    <p className="font-bold">Weekly Veggie Bundle</p>
                                    <div className="flex items-center justify-center">
                                        <p className=" bg-white px-2 rounded-full text-sm mr-2 line-through font-bold">$80.00</p>
                                        <span className="text-xl text-red-500 font-bold">$49.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md bg-product bg-cover h-52 rounded-lg my-4 relative cursor-pointer">
                            <div className="absolute w-full h-full flex items-center justify-end">
                                <div className="bg-yellow-400 bg-oval-placeholder bg-right bg-contain bg-no-repeat p-4 rounded-l-full">
                                    <p className="font-bold">Weekly Veggie Bundle</p>
                                    <div className="flex items-center justify-center">
                                        <p className=" bg-white px-2 rounded-full text-sm mr-2 line-through font-bold">$80.00</p>
                                        <span className="text-xl text-red-500 font-bold">$49.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderHome;
