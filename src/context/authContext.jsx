import { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { auth } from '../firebaseConfig/firebase'

export const authContext = createContext()

// Creo un hook personalizado. Nos permitirá 
// no tener la necesidad de importar en cada
// componente (Login, Register, Home, etc.)
// el "useContext" (from 'react') ni el 
// "context" (from '../context/authContext')

export const useAuth = () => {
    const context = useContext(authContext)
    // Preveo el caso en el que context sea undefined:
    if (!context) throw new Error('No hay Auth Provider.')
    return context
}

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    // Inicialmente no existe el user, porque
    // aún no está la respuesta de Firebase. Para
    // solucionar esto defino un estado "loading".
    const [loading, setLoading] = useState(true)

    // const user = {
    //     login: true
    // }

    // Los errores que pueda arrojar la siguiente función los manejaré en el register.
    
    // TODO: Por alguna razón, signIn acepta que los errores se manejen en el "login",
    // pero signUp NO aceptar que los errores se manejen en el "register", por ejemplo,
    // si no coloco la contraseña al registrarme. SOLUCIÓN: la solución fue poner el
    // async/await aquí también. "signIn" lo tenía y funcionaba bien, entonces lo hice 
    // acá en SignUp y listo, todo solucionado.
    
    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        // console.log(userCredentials)
    }

    // Función de Firebase para cerrar la sesión.
    const logout = () => auth.signOut(auth)

    // En vez de utilizar el userCredentials, utilizaremos una  
    // función especial que nos da Firebase que nos retorna el
    //  usuario cada vez que cambia: onAuthStateChanged.

    useEffect(() => {
        // console.log('Se cargó el Auth Provider.')
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        // El "onAuthStateChanged" es una escucha, entonces cuando 
        // el componente es desmontado (desaparece) utilizo la función
        // unsubscribe para cancelar la escucha:
        return () => unsubscribe();
    }, [])

    return (
        <authContext.Provider value={{ signUp, signIn, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}

