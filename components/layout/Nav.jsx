import React from 'react';
import image from '../../assets/logo.svg'
import Image from 'next/image'
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import LinkNav from "./LinkNav";
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="flex flex-col absolute  w-full z-10">
            <div className="py-4 w-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex items-center justify-between">
                <Link href="/">
                    <a className="m-0 p-0">
                        <Image
                            src={image}
                            alt="Picture of the author"
                            width={120}
                            height={50}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
                    </a>
                </Link>
                <div className="">
                    <LinkNav
                        href="/"
                        text="Home"
                    />
                    <LinkNav
                        href="/colegios"
                        text="Colegios"
                    />
                    <LinkNav
                        href="/blogs"
                        text="Blog"
                    />
                    <LinkNav
                        href="/contact"
                        text="Contact"
                    />
                </div>
                <div>
                    <BtnSecondary
                        title="Crear cuenta"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Nav;
