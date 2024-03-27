import { ReactNode } from 'react'
import Sidebar from '~/components/sidebar'

type LayoutProps = {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='w-3/4 p-4'>{children}</div>
    </div>
  )
}

export default Layout
