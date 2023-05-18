import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const registerWithEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmailAndPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = ()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current loggded user=>',currentUser);
            setUser(currentUser);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        logOut
    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;