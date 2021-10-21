import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import Head from 'next/head'

function Layout({children}) {
    return (
        <>
            <Head>
                
            </Head>
            <Nav/>
            <div className="min-h-screen">
                {
                    children
                }
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
