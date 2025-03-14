import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

//   User create

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    
}

// user log in
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// goolge sign in

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider)
}

// user logout

const logOut = () => {
    setLoading(true);
    return signOut(auth)
}

// update profile
const updateUserProfile = (name, photo) => {
 return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo
  })
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        const userInfo = {email : currentUser.email};
        // Get Tocken and Store client
        axiosPublic.post('/jwt' , userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        })
        
      }
      else{
        // Do Something
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
