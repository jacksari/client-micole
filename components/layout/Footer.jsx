import React from 'react';
import Link from "next/link";
import {FiSend, FiMail, FiPhone, FiMapPin} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer(props) {
    return (
        <footer className=" flex flex-col absolute  w-full bg-primary_dark-500">
            <div className="py-10 md:py-16 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col w-full md:w-1/5 lg:w-2/5 pr-12 px-10 md:px-4 mb-6 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-3">Contáctanos</h3>
                    {/*
                    <p className="flex items-center mb-3">
                        <FiMapPin color="#fff" size="1.8rem"/>
                        <span className="ml-4 text-white text-sm font-light">329 Queensberry Street, North Melbourne VIC 3051, Australia.</span>
                    </p>
                    */}
                    <p className="flex items-center mb-3">
                        <FiPhone color="#fff" size="1.2rem"/>
                        <span className="ml-4 text-white text-sm font-light">+51 981784174</span>
                    </p>
                    <p className="flex items-center mb-3">
                        <FiMail color="#fff" size="1.2rem"/>
                        <span className="ml-4 text-white text-sm font-light">micole.inscripcion@gmail.com</span>
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="https://www.facebook.com/Micole.peru" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaFacebookF color="#fff" size="1.2rem"/>
                        </a>
                        {/*
                        <a href="#" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaTwitter color="#fff" size="1.2rem"/>
                        </a>
                        <a href="#" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaInstagram color="#fff" size="1.2rem"/>
                        </a>
                        <a href="#" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaLinkedinIn color="#fff" size="1.2rem"/>
                        </a>
                        */}
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 px-10 md:px-4 mb-6 md:mb-0">
                    <h3 className="text-white text-lg font-medium mb-3">Descubre</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Lima
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 px-10 md:px-4 mb-6 md:mb-0">
                    <h3 className="text-white text-lg font-medium mb-3">Categorías</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Religiosos
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Internacionales
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Mujeres
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Hombres
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2 font-t2">
                            Especiales
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 px-10 md:px-4 mb-6 md:mb-0">
                    <h3 className="text-white text-lg font-medium mb-3">Menú</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Inicio
                        </a>
                    </Link>
                    <Link href="/categorias">
                        <a className="text-white text-sm font-light my-2">
                            Categorías
                        </a>
                    </Link>
                    <Link href="/nosotros">
                        <a className="text-white text-sm font-light my-2">
                            Nosotros
                        </a>
                    </Link>
                    <Link href="/blogs">
                        <a className="text-white text-sm font-light my-2">
                            Blog
                        </a>
                    </Link>
                    <Link href="/contacto">
                        <a className="text-white text-sm font-light my-2">
                            Contáctanos
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Términos y condiciones
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 px-10 md:px-4">
                    <h3 className="text-white text-lg font-medium mb-3">Suscríbete</h3>
                    <p className="text-white text-sm font-light my-1">Entérate de todos los tips sobre educación para tus hijos que te
                        ofrece MiCole.pe</p>
                    <div className="bg-white flex justify-between items-center p-1 rounded mt-3">
                        <input placeholder="Ingresa tu correo" type="text" className="w-full flex-1 outline-none pl-2"/>
                        <div className="bg-primary-500 p-1 rounded">
                            <FiSend size="1.5rem" color={'#fff'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-1 border-footer ">
                <div className="py-8 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
                    <p className="text-white text-xs md:text-sm font-light text-center px-2 md:px-0">© { new Date().getFullYear()} Desarrollado por MiCole - Todos los derechos reservados.</p>
                    <div className="text-center">
                        <Link href="/">
                            <a className="text-white text-xs md:text-sm font-light my-2 md:mx-2">Colegios</a>
                        </Link>
                        <Link href="/">
                            <a className="text-white text-xs md:text-sm font-light my-2 md: mx-2">Contáctanos</a>
                        </Link>
                        <Link href="/">
                            <a className="text-white text-xs md:text-sm font-light my-2 md:mx-2">Términos y condiciones</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
