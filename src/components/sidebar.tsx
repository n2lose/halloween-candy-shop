import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }
  return (
    <div className='w-1/4 h-screen bg-gray-200 p-4'>
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
