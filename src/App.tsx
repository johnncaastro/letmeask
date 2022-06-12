import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { CreateRoom } from './pages/CreateRoom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';
import { 
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup } from 'firebase/auth';

import './styles/global.css';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextProps {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

function App() {
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
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ signInWithGoogle, user }}>
          <Switch>
            <Route caseSensitive path='/' element={<Home />} />
            <Route path='/rooms/new' element={<CreateRoom />} />
            <Route path='/rooms/:id' element={<Room />} />
          </Switch>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
