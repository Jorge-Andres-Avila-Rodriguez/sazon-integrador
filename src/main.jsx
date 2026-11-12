import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Colecciones from './comunidad/colecciones/Colecciones'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header>
      <Colecciones />
    </Header>
  </StrictMode>,
)
