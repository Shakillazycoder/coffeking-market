import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {



    const [user, setUser] = useState(null);

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SingInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
          setUser(createUser);
          console.log(createUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    const AuthInfo = {
        user,
        CreateUser,
        SingInUser,
    }
        
    
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;