import { Routes as Router, Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { AuthContext } from '../contexts/AuthContext'

function ProtectedRoutes() {
  const { authenticated } = useContext(AuthContext)

  if (!authenticated) return <Navigate to='/login' replace />
  return <Outlet />
}

// eslint-disable-next-line import/prefer-default-export
export default function Routers() {
  return (
    <Router>
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
    </Router>
  )
}
