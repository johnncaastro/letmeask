import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { 
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup } from 'firebase/auth';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  user: User | undefined;
  signInWithGoogle(): Promise<void>;
}

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User>();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const { displayName, photoURL, uid } = user;

        if(!displayName || !photoURL) {
          throw new Error('Missing information on Google Account!');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])


  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider)

    console.log(result)

    if(result.user) {
      const { displayName, photoURL, uid } = result.user;

      if(!displayName || !photoURL) {
        throw new Error('Faltando informação na conta Google!');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {

  const context = useContext(AuthContext);

  return context;
}