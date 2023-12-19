import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"

// PAGES
import HomePage from './pages/home/HomePage'
import Application from './pages/application/Application'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'

function App() {
  return (
    <BrowserRouter>
      {/* PUBLIC ROUTES */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>

      {/* PRIVATE ROUTES */}
      <Routes>
        <Route element={<PrivateRoute isAuth={true} />}>
          <Route path='/app' element={<Application/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
