import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Storybook from './storybook/storybook'
import reportWebVitals from './reportWebVitals'
import './sass/style.scss'
import Login from './components/Login/Login'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'storybook',
    element: <Storybook />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'landingpage',
    element: <LandingPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
