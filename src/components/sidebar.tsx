import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '~/contexts/AuthContext'

const Sidebar = () => {
  const navigate = useNavigate()
  const { setAuthenticated } = useContext(AuthContext)
  const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setAuthenticated(false)
    navigate('/login', { replace: true })
  }
  return (
    <div className='w-1/4 h-screen bg-gray-200 p-4 overflow-y-auto'>
      <ul>
        <li>
          <a href='/dashboard' className='block py-2'>
            Dashboard
          </a>
        </li>
        <li>
          <a href='/orders' className='block py-2'>
            Orders
          </a>
        </li>
        <li>
          <a
            href='/logout'
            className='block py-2'
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleLogOut(e)}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
