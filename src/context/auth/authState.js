import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
} from "../types";
import clienteAxios from "../../config/axios";
import {useRouter} from "next/router";

const AuthState = ({children}) => {

    const router = useRouter();

    // Definir state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token'): '',
        autenticado: false,
        usuario: null,
        mensaje: null,
        loading: false,
        error: false
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);


    const prueba = () => {
        console.log('prueba')
    }

    return (
        <authContext.Provider
            value={{
                prueba
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;