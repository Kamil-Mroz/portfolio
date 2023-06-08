import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
const RootLayout = () => {
  return (
    <div className="min-h-screen md:py-11 py-8 px-6 lg:px-16 md:flex gap-7">
      <Sidebar />
      <Card className="flex-1">
        <CardHeader className="py-0 pr-0 mb-9">
          <Header />
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </div>
  )
}
export default RootLayout
