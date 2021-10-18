import React from 'react';

const BtnSecondary = ({title}) => {
    return (
        <button className="ml-4 inline-flex items-center px-12 py-3 bg-white border border-black rounded-full font-semibold text-xs text-black uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-gray-100 focus:ring focus:ring-gray-200 disabled:opacity-25 transition">
            { title }
        </button>
                        
    )
}

export default BtnSecondary;