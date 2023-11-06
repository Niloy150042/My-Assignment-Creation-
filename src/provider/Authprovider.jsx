import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout =()=>{
    return signOut(auth)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      console.log("current user :", currentuser);
      setloading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    loading,
    createuser,
    signIn,logout
  };

  return (
    <Authcontext.Provider value={authinfo}>
        {children}
        
    </Authcontext.Provider>
  );
};

export default Authprovider;
