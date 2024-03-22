import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Routers from './routes/index'

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routers />
    </AuthProvider>
  </BrowserRouter>
)

export default App
