import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <>
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
