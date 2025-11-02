import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';
export const AuthContex = createContext()
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2';
const googlrProvider = new GoogleAuthProvider();

const ContexProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user with email and pawword
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googlrProvider)
    }
    // logout user
    const logOutUser = async () => {
        return signOut(auth).then(() => {
            Swal.fire({
                title: "Logged out successfully",
                icon: "info"
            });
        })
    }
    // user profile update
    const updateUser = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    }
    // login with email and password
    const loginUser = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                Swal.fire({
                    title: "Login successful",
                    icon: "success"
                });
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.code}`,
                    icon: "error"
                });
            })
    }
    // set user on state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        });
        return () => unsubscribe()
    }, [])
    const authData = { loading, setLoading, user, setUser, createUser, loginWithGoogle, logOutUser, updateUser, loginUser }
    return (
        <AuthContex.Provider value={authData}>
            {children}
        </AuthContex.Provider>
    )
}

export default ContexProvider