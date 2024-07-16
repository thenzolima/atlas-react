import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Ajustes from './pages/Ajustes.jsx'
import Galerias from './pages/Galerias.jsx'
import Sobre from './pages/Sobre.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Content from './pages/Content.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "galerias",
        element: <Galerias />
      },
      {
        path: "ajustes",
        element: <Ajustes />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "/content/:id",
        element:<Content/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
