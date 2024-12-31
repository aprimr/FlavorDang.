import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import EmailVerification from './Pages/EmailVerification.jsx'
import PhoneVerification from './Pages/PhoneVerification.jsx'
import PageNotFound from './Components/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/email-verification',
        element: <EmailVerification />,
      },
      {
        path: '/phone-verification',
        element: <PhoneVerification />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
