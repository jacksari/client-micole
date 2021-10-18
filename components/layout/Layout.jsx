import React from 'react';
import Nav from "./Nav";

function Layout({children}) {
    return (
        <>
            <Nav/>
            <div className="min-h-screen">
                {
                    children
                }
            </div>
        </>
    );
}

export default Layout;
