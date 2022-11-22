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
import PlayerDetailsPage from './pages/PlayerDetailsPage'
import CreateAccount from './pages/CreateAccount'
import CreateAccountPlayer from './pages/CreateAccountPlayer'
import CreateAccountRecruiter from './pages/CreateAccountRecruiter'
import PlayerProvider from './context/PlayerContext'
import ComparisonPage from './pages/ComparisonPage'
import PlayerReviewOverview from './pages/PlayerReviewOverview'
import ReviewPlayer from './pages/ReviewPlayer'
import ComparisonResultsPage from './pages/ComparisonResultsPage'
import PlayerComparisonSelectPage from './pages/PlayerComparisonSelectPage'
import FavoritesPage from './pages/FavoritesPage'
import ContactPlayer from './pages/ContactPlayer'
import ChoosePlanPage from './pages/ChoosePlanPage'

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
  {
    path: 'player-details',
    element: <PlayerDetailsPage />,
  },
  {
    path: 'create-account',
    element: <CreateAccount />,
  },
  {
    path: 'create-account-player',
    element: <CreateAccountPlayer />,
  },
  {
    path: 'create-account-recruiter',
    element: <CreateAccountRecruiter />,
  },
  {
    path: 'comparison',
    element: <ComparisonPage />,
  },
  {
    path: 'player-review-overview',
    element: <PlayerReviewOverview />,
  },
  {
    path: 'review-player',
    element: <ReviewPlayer />,
  },
  {
    path: 'comparison-results',
    element: <ComparisonResultsPage />,
  },
  {
    path: 'player-comparison-select-page',
    element: <PlayerComparisonSelectPage />,
  },
  {
    path: 'favorites',
    element: <FavoritesPage />,
  },
  {
    path: 'contact-player',
    element: <ContactPlayer />,
  },
  {
    path: 'choose-plan',
    element: <ChoosePlanPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <PlayerProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PlayerProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
