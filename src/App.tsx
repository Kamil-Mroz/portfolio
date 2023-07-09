import Portfolio1 from './components/portfolio1'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Portfolio1 />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
