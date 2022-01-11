import React from 'react';
import image from '../../assets/logo.svg'
import Image from 'next/image'
import BtnSecondary from "./BtnSecondary";
import LinkNav from "./LinkNav";
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";
import LinkNavFixed from "./LinkNavFixed";
import BtnPrimary from "./BtnPrimary";

const Nav = () => {
    return (
        <>
            <nav className="flex flex-col fixed  w-full bg-white shadow-md z-10">
            <div className="py-4 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
                <Link href="/">
                    <a className="m-0 p-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://res.cloudinary.com/mikunaalli/image/upload/v1641936685/micole/Group_6_yvvvox.svg" className="ml-2 object-contain h-6 md:h-8" alt=""/>
                    </a>
                </Link>
                <div className=" md:flex md:justify-end hidden md:flex-1">
                    <LinkNav
                        href="/"
                        text="Home"
                    />
                    <LinkNav
                        href="/colegios"
                        text="Colegios"
                    />
                    <LinkNav
                        href="/categorias"
                        text="Categorías"
                    />

                    <LinkNav
                        href="/blogs"
                        text="Blog"
                    />
                    <LinkNav
                        href="/contact"
                        text="Contáctanos"
                    />
                </div>
                <div className="flex items-center mr-2 md:mr-0">
                    <div className="mx-2 hidden md:block">
                        <FaRegUser color="#fff" size="1.2rem"/>
                    </div>
                    <BtnPrimary
                        title="Inscribe tu colegio"
                    />
                </div>
            </div>
        </nav>
            <nav className="flex flex-col  w-full bg-white shadow-md z-40">
                <div className="py-4 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/">
                        <a className="m-0 p-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/img/logo.svg" className="ml-2 object-contain h-6 md:h-8" alt=""/>
                        </a>
                    </Link>
                    <div className="flex-1 flex justify-end">
                        <LinkNavFixed
                            href="/"
                            text="Home"
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
