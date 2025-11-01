import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';
export const AuthContex = createContext()
const ContexProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        });
        return () => unsubscribe()
    },[])
    const authData = { loading, setLoading, user, setUser, createUser }
    return (
        <AuthContex.Provider value={authData}>
            {children}
        </AuthContex.Provider>
    )
}

export default ContexProvider