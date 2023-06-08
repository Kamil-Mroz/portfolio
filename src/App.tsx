import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import ErrorPage from './Error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <h2>About</h2>,
      },
      {
        path: 'resume',
        element: <h2>Resume</h2>,
      },
      {
        path: 'portfolio',
        element: <h2>Portfolio</h2>,
      },
      {
        path: 'blog',
        element: <h2>Blog</h2>,
      },
      {
        path: 'contact',
        element: <h2>Contact</h2>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
