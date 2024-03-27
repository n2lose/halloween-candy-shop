import { Routes as Router, Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import Login from '~/pages/Login'
import Dashboard from '~/pages/Dashboard/Dashboard'
import { AuthContext } from '../contexts/AuthContext'
import Orders from '~/pages/orders/Orders'
import Layout from '~/pages//Layout'

function ProtectedRoutes() {
  const { authenticated } = useContext(AuthContext)
  console.log('authenticated ==== ', authenticated)
  if (!authenticated) return <Navigate to='/login' replace />
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default function RootRouters() {
  return (
    <Router>
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
      </Route>
    </Router>
  )
}
