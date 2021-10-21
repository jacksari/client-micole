import React from 'react';
import image from '../../assets/logo.svg'
import Image from 'next/image'
import BtnSecondary from "./BtnSecondary";
import LinkNav from "./LinkNav";
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="flex flex-col absolute  w-full z-10 bg-primary-500 shadow-md">
            <div className="py-4 w-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex items-center justify-between">
                <Link href="/">
                    <a className="m-0 p-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/img/logo.svg" className="object-contain h-8" alt=""/>
                    </a>
                </Link>
                <div className="flex-1 flex justify-end">
                    <LinkNav
                        href="/"
                        text="Home"
                    />
                    <LinkNav
                        href="/categorias"
                        text="Categorías"
                    />
                    <LinkNav
                        href="/nosotros"
                        text="Nosotros"
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
                <div className="flex items-center">
                    <div className="mx-2">
                        <FaRegUser color="#fff" size="1.2rem"/>
                    </div>
                    <BtnSecondary
                        title="Inscribe tu colegio"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Nav;
