import HomePage from '@renderer/pages/HomePage'
import ErrorPage from '@renderer/pages/ErrorPage'
import Icon from '@atom/Icon'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'

const router: RouteObject = {
  path: '/',
  element: HomePage(),
  errorElement: ErrorPage(),
  children: [
    {
      path: '/deploy',
      element: Icon({ name: 'AArrowDown' })
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
