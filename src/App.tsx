import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { CreateRoom } from './pages/CreateRoom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';

import './styles/global.css';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<CreateRoom />} />
          <Route path='/rooms/:id' element={<Room />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
