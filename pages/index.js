import Layout from "../components/layout/Layout";
import HeaderHome from "../components/home/HeaderHome";
import WhyMicole from "../components/home/WhyMicole";
import React from "react";
import cole1 from '../public/img/cole1.svg'
import cole2 from '../public/img/cole2.svg'
import cole3 from '../public/img/cole3.svg'
import Image from 'next/image'
import image from "../assets/logo.png";
import BtnSecondary from "../components/layout/BtnSecondary";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";

export default function Home() {
  return (
      <Layout>
          <Seo
              title="Busca tu colegio ideal"
          />
          <NavFixed/>
          <HeaderHome/>


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
                          <h3 className="text-lg font-semibold my-3 text-black2">Cientos de alternativas para escoger</h3>
                          <p className="font-light text-gray-500 text-sm">Encuentra una gran variedad de colegios que se acomoden a tus necesidades</p>
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
                          <h3 className="text-lg font-semibold my-3 text-black2">Contacto directo
                              con tu colegio de interés</h3>
                          <p className="font-light text-gray-500 text-sm">Separa una cita directamente desde la plataforma con un solo click</p>
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
                          <h3 className="text-lg font-semibold my-3 text-black2">Revisa recomendaciones
                              de nuestra comunidad</h3>
                          <p className="font-light text-gray-500 text-sm">Verifica miles de opiniones de otros padres de familia sobre los colegios de la plataforma</p>
                      </div>
                  </div>
              </div>

          </div>

          <div className="bg-white py-16">
              <div className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <h2 className="text-center font-bold text-3xl mb-12 text-black2">Explora nuestras categorías de colegios</h2>
                  <div className="grid grid-cols-5 gap-4">
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                  </div>
              </div>
          </div>

          <div className="bg-primary-500 py-16">
              <div className="w-full mx-auto max-w-6xl sm:px-6 lg:px-8">
                  <div className="text-center">
                      <h2 className="text-white text-3xl font-semibold">Inscribe tu colegio en nuestra plataforma</h2>
                      <h3 className="text-white text-md font-light mb-4 mt-2">Únete a la mayor comunidad de colegios en el Perú</h3>
                      <BtnSecondary
                          title="Regístrate gratis"
                      />
                  </div>
              </div>
          </div>
      </Layout>
  )
}
