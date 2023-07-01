import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { Button } from './components/ui/Button'
const ErrorPage = () => {
  const error = useRouteError()
  const location = useLocation()
  const navigate = useNavigate()
  const navigateBack = () => {
    navigate(-1)
  }

  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }

  return (
    <div className="min-h-screen grid place-content-center gap-3">
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-xl">Sorry, a unexpected error has occurred.</p>
      <p className="text-lg">{errorMessage}.</p>
      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={navigateBack}
        >
          Go Back
        </Button>
        <Button asChild>
          <Link to={location.pathname}>Retry</Link>
        </Button>
      </div>
    </div>
  )
}
export default ErrorPage
