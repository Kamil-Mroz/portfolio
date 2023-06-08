import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
const ErrorPage = () => {
  const error = useRouteError()
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
    <div className="min-h-screen grid place-content-center">
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-lg">Sorry, a unexpected error has occurred.</p>
      <p className="text-lg">{errorMessage}</p>
    </div>
  )
}
export default ErrorPage
