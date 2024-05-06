import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './Provider/AuthProvider.jsx'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
