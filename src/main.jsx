import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import ReporteValoracion from './comunidad/reporteValoracion/ReporteValoracion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header
      breadcrumbItems={[
        { label: 'Inicio', icon: 'bi-house', active: false },
        { label: 'Comunidad y Valoraciones', icon: 'bi-people', active: false },
        { label: 'Admin Moderación de Reportes', icon: 'bi-shield-check', active: true },
      ]}
    >
      <ReporteValoracion />
    </Header>
  </StrictMode>,
)
