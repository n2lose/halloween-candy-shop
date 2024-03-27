import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import RootRouters from './routes/rootRoutes'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RootRouters />
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}
export default App
