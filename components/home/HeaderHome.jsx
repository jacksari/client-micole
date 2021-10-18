import React from 'react';
import BtnPrimary from '../layout/BtnPrimary';
import BtnSecondary from '../layout/BtnSecondary';
import { RiArrowDownSLine } from "react-icons/ri";


const HeaderHome = () => {
    return (
        <header className="flex flex-col bg-gray-100 h-screen">

            <div className="relative bg-white flex-1 bg-hero-header bg-no-repeat  bg-cover pt-7">
                <div className="h-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                    <h2 className="py-2 text-white text-xl font-normal">It great to be home!</h2>
                    <h1 className="text-6xl font-bold text-white">Find Your plp Home</h1>

                    <div className="bg-white p-3 mt-10 rounded flex">
                        <div className="flex flex-col mr-3">
                            <p className="font-bold text-base">Type</p>
                            <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 pb-1 cursor-pointer">
                                <p className="text-sm">Property type</p>
                                <RiArrowDownSLine/>
                            </div>
                        </div>
                        <div className="flex flex-col mr-3">
                            <p className="font-bold text-base">Type</p>
                            <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 pb-1 cursor-pointer">
                                <p className="text-sm">Property type</p>
                                <RiArrowDownSLine/>
                            </div>
                        </div>
                        <div className="flex flex-col mr-3">
                            <p className="font-bold text-base">Type</p>
                            <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 pb-1 cursor-pointer">
                                <p className="text-sm">Property type</p>
                                <RiArrowDownSLine/>
                            </div>
                        </div>
                        <div className=" flex items-center">
                            <BtnPrimary
                                title="Search"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderHome;
