import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import ErrorPage from './Error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
