import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubSignIn=()=>{
        return signInWithPopup(auth, gitHubProvider);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        signInUser,
        logOut,
        googleSignIn,
        gitHubSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}