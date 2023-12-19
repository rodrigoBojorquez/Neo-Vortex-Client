import { Outlet, Navigate } from "react-router-dom"

function PrivateRoute({isAuth, children}) {
  if(!isAuth) {
    return <Navigate to={"/login"} />
  }
  return children ? children : <Outlet/>
}

export default PrivateRoute