import React from 'react';
import BtnPrimary from '../layout/BtnPrimary';
import { RiArrowDownSLine } from "react-icons/ri";


const HeaderHome = () => {
    return (
        <header className="flex flex-col bg-gray-100 h-screen">

            <div className="relative bg-white flex-1 bg-hero-header bg-no-repeat bg-no-repeat bg-center bg-cover">
                <div className="h-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                    <h2 className="py-2 text-white text-2xl font-normal">¡Qué Emoción!</h2>
                    <h1 className="text-5xl font-bold text-white">Tu búsqueda de colegios comienza aquí</h1>

                    <div className="bg-white p-3 mt-10 rounded flex shadow-2xl">
                        <div className="flex flex-col mr-3">
                            <p className="font-bold text-base uppercase">Distrito</p>
                            <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 py-1 cursor-pointer">
                                <p className="text-sm">Selecciona un distrito</p>
                                <RiArrowDownSLine/>
                            </div>
                        </div>
                        <div className="flex flex-col mr-3">
                            <p className="font-bold text-base uppercase">Grado</p>
                            <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 py-1 cursor-pointer">
                                <p className="text-sm">Selecciona un grado</p>
                                <RiArrowDownSLine/>
                            </div>
                        </div>
                        <div className="flex flex-col mr-3">
                            <p className="font-bold text-base uppercase">Año de ingreso</p>
                            <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 py-1 cursor-pointer">
                                <p className="text-sm">Selecciona año de ingreso</p>
                                <RiArrowDownSLine/>
                            </div>
                        </div>
                        <div className=" flex items-center">
                            <BtnPrimary
                                title="Buscar"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderHome;
