import { ReactNode } from 'react'
import Sidebar from '~/components/sidebar'

type LayoutProps = {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex-1 p-4 overflow-y-auto'>{children}</div>
    </div>
  )
}

export default Layout
