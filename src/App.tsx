import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthProvider/AuthProvider';

function App() {
  const [count, setCount] = useState(0);

  /**
   * UseEffect
   * 
   * Verificar no localstorage se existe usuario?
   * Se tem usuario, tu usa o setAuth do context.
   */

  return (
    <div className="App">
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </div>
  )
}

export default App
