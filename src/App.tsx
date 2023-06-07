import { Alert, AlertDescription, AlertTitle } from './components/Alert'
import { Terminal } from 'lucide-react'
function App() {
  return (
    <>
      <Alert className="w-96">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <h1>hello</h1>
    </>
  )
}

export default App
