import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import DeployPage from '@pages/DeployPage'
import ErrorPage from '@pages/ErrorPage'
import DeployVersionMapPage from '@pages/DeployVersionMapPage'

const router: RouteObject = {
  path: '/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/deploy',
      element: <DeployPage />
    },
    {
      path: '/deploy/application',
      element: <></>
    },
    {
      path: '/deploy/studio',
      element: <></>
    },
    {
      path: '/deploy/lambda',
      element: <></>
    },
    {
      path: '/deploy/versionMap',
      element: <DeployVersionMapPage />
    }
  ]
}

const toolRouter = createBrowserRouter([router], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true
  }
})

export default toolRouter
