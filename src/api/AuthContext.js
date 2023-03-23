import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useContext, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [accessToken, setAccessToken] = useState('')
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    const token = await user.getIdToken()
    setAccessToken(token)
    setUser(user)
  }

  const logOut = () => {
      signOut(auth)
      localStorage.clear()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("first", currentUser);
      if (currentUser && currentUser.email) {
              console.log("hai", currentUser);
              setUser(currentUser);
        if (
          currentUser.email.endsWith("@fpt.edu.vn")
        ) {
          currentUser.getIdToken().then((token) => {
            setAccessToken(token);
          });
        } else {
          logOut();
          setTimeout(() => {
            alert("This account not access");
          }, 1000);
        }
      } else {
        currentUser.getIdToken().then((token) => {
          setAccessToken(token);
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);


  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ googleSignIn, logOut, user ,accessToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
