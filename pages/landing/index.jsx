import React from 'react';
import Layout from '../../components/layout/Layout';
import NavFixed from '../../components/layout/NavFixed';


function NotFound() {
    return (
        <Layout>
            <NavFixed/>
            <div className="h- bg-hero-header flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-white mb-12">Página no encontrada</h1>

            </div>
        </Layout>
    );
}

export default NotFound;
