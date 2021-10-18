import React from 'react';
import Link from "next/link";
import {FiSend} from "react-icons/fi";

function Footer(props) {
    return (
        <footer className="flex flex-col absolute  w-full z-10 bg-primary_dark-500">
            <div className="py-16 w-full mx-auto max-w-6xl sm:px-6 lg:px-8 flex items-start justify-between">
                <div className="flex flex-col w-2/5">
                    <h3 className="text-white text-lg font-bold mb-3">Contact us</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-1/5">
                    <h3 className="text-white text-lg font-bold mb-3">Contact us</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-1/5">
                    <h3 className="text-white text-lg font-bold mb-3">Contact us</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-1/5">
                    <h3 className="text-white text-lg font-bold mb-3">Contact us</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-1">
                            Home
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-2/5">
                    <h3 className="text-white text-lg font-bold mb-3">Contact us</h3>
                    <p className="text-white text-sm font-light my-1">We don’t send spam so don’t worry.</p>
                    <div className="bg-white flex justify-between items-center p-1 rounded mt-3">
                        <input type="text" className="w-full flex-1 outline-none pl-2"/>
                        <div className="bg-primary-500 p-1 rounded">
                            <FiSend size="1.5rem" color={'#fff'}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
