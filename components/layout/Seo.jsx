import React from 'react';
import { NextSeo } from 'next-seo';

function Seo({title, description, img, url}) {
    return (
        <NextSeo
            title={title ? `${title} | Micole` : 'Micole App'}
            description={ description ? description : 'Tu búsqueda de colegios comienza aquí' }
            canonical={ url ? url : 'https://micole.pe/' }
            openGraph={{
                url: url ? url : 'https://micole.pe/',
                title: title ? title : 'Micole App' ,
                description: description ? description : 'Tu búsqueda de colegios comienza aquí',
                type: 'website',
                images: [
                    {
                        url: img ? img : `https://res.cloudinary.com/mikunaalli/image/upload/v1641935341/micole/Group_54_bwt6qs.jpg`,
                        width: 256,
                        height: 256,
                        alt: description ? description : 'Tu búsqueda de colegios comienza aquí',
                    },
                    {
                        url: img ? img : `https://res.cloudinary.com/mikunaalli/image/upload/v1641935341/micole/Group_54_bwt6qs.jpg`,
                        width: 500,
                        height: 500,
                        alt: description ? description : 'Tu búsqueda de colegios comienza aquí',
                    },
                    {
                        url: img ? img : `https://res.cloudinary.com/mikunaalli/image/upload/v1641935341/micole/Group_54_bwt6qs.jpg`,
                        width: 800,
                        height: 600,
                        alt: description ? description : 'Tu búsqueda de colegios comienza aquí',
                    },
                    {
                        url: img ? img : `https://res.cloudinary.com/mikunaalli/image/upload/v1641935341/micole/Group_54_bwt6qs.jpg`,
                        width: 900,
                        height: 800,
                        alt: description ? description : 'Tu búsqueda de colegios comienza aquí',
                    },
                    { url: img ? img : `https://res.cloudinary.com/mikunaalli/image/upload/v1641935341/micole/Group_54_bwt6qs.jpg`, },
                ],
                site_name: 'Micole App',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
            languageAlternates={[{
                hrefLang: 'es-ES',
                href: 'https://micole.pe/',
            }]}
            additionalMetaTags={[
                {
                    property: 'dc:creator',
                    name: 'dc:creator',
                    content: 'Jack Sari'
                },
                {
                    name: 'application-name',
                    content: 'Dened'
                },
                {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                },
                {
                    name: 'author',
                    content: 'Jack Sari'
                },
                {
                    name: 'copyright',
                    content: 'Copyright 2022 by Micole'
                },
                {
                    name: 'distribution',
                    content: 'global'
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: 'Micole'
                },
            ]}
        />
    );
}

export default Seo;