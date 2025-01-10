import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext(); // Corrected spelling
export const useAuth = () => {
    return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false); // Set loading to false after auth state is initialized

            if(user) {
                const { email, displayName, photoURL } = user; // Corrected photoURL
                const userData = {
                    email, username: displayName, photo: photoURL
                };
                console.log("User Data:", userData); // Example usage
            }
        });

        return unsubscribe;
    }, []);

    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    };
     
    const logout = async () => {
        return await signOut(auth);
    };

    const value = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Conditionally render children */}
        </AuthContext.Provider>
    );
};
