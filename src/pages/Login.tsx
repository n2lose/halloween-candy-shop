import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import FreddyLogo from '../assets/Freddys_Logo.svg'
import { AuthContext } from '../contexts/AuthContext'
import { loginService } from '../services/api'

function Login() {
  const navigate = useNavigate()

  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  console.log('authenticated ===== ', authenticated)
  const handleLogin = async (event: any) => {
    event.preventDefault()
    // handle Login
    console.log('username === ', username)
    console.log('password === ', password)
    await loginService(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res?.data.access_token)
          toast.success('Login Success')
          setAuthenticated(true)
          navigate('/dashboard')
        }
      })
      .catch((e) => toast.warning('Login error!', e))
  }

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='bg-white rounded shadow-lg p-8 w-100px'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold flex-1'>{`Freddy's Artisanal Halloween Candy Shop`}</h1>
          <img src={FreddyLogo} alt='Freddy Halloween Candy Shop' width={30} height={30} className='flex-1' />
        </div>
        <form>
          <div className='mb-4'>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your username'
            />
          </div>
          <div className='mb-10'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
