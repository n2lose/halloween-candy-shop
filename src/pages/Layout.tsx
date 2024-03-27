import { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/4 bg-gray-200 p-4'>
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
            <a href='/logout' className='block py-2'>
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className='w-3/4 p-4'>{children}</div>
    </div>
  )
}

export default Layout
