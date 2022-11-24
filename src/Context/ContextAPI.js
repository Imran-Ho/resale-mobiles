import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const ContextAPI = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    // user create
    const newUserCreate = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// user log in
    const logInWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

// update user
    const updateUserInfo = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }

   
// sign out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
// observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    }, [])


    const authInfo = {user, newUserCreate, logInWithEmail, updateUserInfo, logOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextAPI;