import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"

/* 
  PAGES
*/

// PUBLIC
import HomePage from './pages/home/HomePage'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import Contact from './pages/static/contact/Contact'
import About from './pages/static/about/About'

// PRIVATE
import Editor from './pages/application/editor/Editor'
import UserDash from './pages/application/userDash/UserDash'

function App() {

  /* 
    TODO:
      - Implement Redux Toolkit to manage the auth state
      - The auth state will be managing by JWT and level access
      - Change the Link in HomePage to /me/:user
      - Change the Link in the Editor page to /me/:user
  */

  return (
    <BrowserRouter>
      {/* PUBLIC ROUTES */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

      {/* PRIVATE ROUTES */}
      <Routes>
        <Route element={<PrivateRoute isAuth={true} />}>
          <Route path='/me/:username' element={<UserDash/>} />
          <Route path='/editor/:docId' element={<Editor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
