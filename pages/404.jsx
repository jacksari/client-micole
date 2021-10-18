import React from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link'

function NotFound() {
    return (
        <Layout>
            <div className="min-h-screen bg-red-300 flex items-center justify-center">
                <h1>Página no encontrada</h1>
                <Link href="/">
                    <a className="">Regresar al inicio</a>
                </Link>
            </div>
        </Layout>
    );
}

export default NotFound;
