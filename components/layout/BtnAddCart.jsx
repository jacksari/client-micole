import React from 'react';

const BtnAddCart = () => {
    return (
        <button className="flex items-center justify-center w-full px-12 py-3  bg-primary-500 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Add cart
        </button>
                        
    )
}

export default BtnAddCart;