import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import CounterContext from './contexts/CounterContext.jsx'
import UserContext from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  // providing counter context to root component
  // <StrictMode>
    <CounterContext>
      <UserContext>
        <App />
      </UserContext>
    </CounterContext>
  // </StrictMode>,
)
