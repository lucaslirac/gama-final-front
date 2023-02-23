import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes />
        <GlobalStyle />
    </div>
  )
}

export default App
