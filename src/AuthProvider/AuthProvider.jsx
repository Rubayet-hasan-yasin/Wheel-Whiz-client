import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = true

    const registerWithEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmailAndPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };


    const authInfo = {
        user,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword
    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;