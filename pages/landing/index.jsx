import React from 'react';
import BtnPrimary from '../../components/layout/BtnPrimary';
import Layout from '../../components/layout/Layout';
import NavFixed from '../../components/layout/NavFixed';

import cole1 from '../../public/img/cole1.svg'
import cole2 from '../../public/img/cole2.svg'
import cole3 from '../../public/img/cole3.svg'

import Image from 'next/image'

import Link from "next/link";


function NotFound() {
    return (
        <Layout>
            <NavFixed/>
            <div className="">

            </div>
            <div className="h-screen bg-hero-landing1 bg-cover bg-center flex flex-col items-center justify-center">
                <div className="w-full mx-auto max-w-6xl sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-12">
                        Publica tu colegio. Concreta citas con familias interesadas. Gestiona todo en línea. Obtén nuevos estudiantes.
                    </h1>
                    <h2 className="text-2xl font-bold text-white mb-12">Todo en un solo lugar, de forma simple y a bajo costo.</h2>

                    <button className=" inline-flex items-center justify-center px-8 py-3  bg-primary-500 border border-transparent rounded-md font-semibold text-base text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
                        {'Inscribe tu colegio AQUÍ'}
                    </button>
                </div>
            </div>

            <div className="bg-gray-100 py-16">
                
              <div className="w-full mx-auto max-w-5xl sm:px-6 lg:px-8">
                  <h2 className="text-center font-bold text-3xl mb-12 text-black2">¿Por qué escoger MiCole.pe?</h2>
                  <div className="grid grid-cols-3 gap-8">
                      <div className="bg-white pt-12 pb-8 px-6 rounded text-center shadow-sm">
                          <Image
                              src={cole1}
                              alt="Picture of the author"
                              width={120}
                              height={50}
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                          />
                          <h3 className="text-lg font-semibold my-3 text-black2">Haz que tu colegio brille frente a las familias</h3>
                          <p className="font-light text-gray-500 text-sm">Publica toda la información relevante sobre ti para las familias que están buscando colegios.</p>
                      </div>
                      <div className="bg-white pt-12 pb-8 px-6 rounded text-center shadow-sm">
                          <Image
                              src={cole2}
                              alt="Picture of the author"
                              width={120}
                              height={50}
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                          />
                          <h3 className="text-lg font-semibold my-3 text-black2">Completa tus vacantes disponibles</h3>
                          <p className="font-light text-gray-500 text-sm">Gestiona todas las vacantes de inicial, primaria y secundaria que tengas en un solo lugar.</p>
                      </div>
                      <div className="bg-white pt-12 pb-8 px-6 rounded text-center shadow-sm">
                          <Image
                              src={cole3}
                              alt="Picture of the author"
                              width={120}
                              height={50}
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                          />
                          <h3 className="text-lg font-semibold my-3 text-black2">Cuenta con un proceso de admisión simple y eficiente</h3>
                          <p className="font-light text-gray-500 text-sm">Olvídate de tener que mandar correos y comunicaciones uno a uno, hazlo todo masivo.</p>
                      </div>
                  </div>
              </div>

            </div>

            <div className="bg-hero-landing2 bg-center bg-cover bg-no-repeat flex items-center justify-center py-40 w-full bg-opacity-20">
                <div className="bg-white shadow px-6 py-6 rounded">
                    <Link href="/">
                        <a className="m-0 p-0 text-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/img/login2.svg" className="text-center m-auto object-contain h-8" alt=""/>
                        </a>
                    </Link>
                    <form className="flex flex-col">
                        <input type="email" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="Nombre del colegio"/>
                        <input type="text" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="Correo electrónico"/>
                        <input type="text" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="RUC"/>
                        <input type="text" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="Celular"/>
                        
                        <div className="mt-4"/>
                        <BtnPrimary
                            title="Quiero inscribirme"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default NotFound;
