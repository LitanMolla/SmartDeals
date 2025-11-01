import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './routes/Router.jsx'
import ContexProvider from './contex/ContexProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexProvider>
      <RouterProvider router={Router} />
    </ContexProvider>
  </StrictMode>,
)
