import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Storybook from './storybook/storybook'
import reportWebVitals from './reportWebVitals'
import './sass/style.scss'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import PlansPage from './pages/PlansPage'
import TopPlayersPage from './pages/TopPlayersPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
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
    path: 'app',
    element: <App />,
  },
  {
    path: 'plans',
    element: <PlansPage />,
  },
  {
    path: 'TopPlayers',
    element: <TopPlayersPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
