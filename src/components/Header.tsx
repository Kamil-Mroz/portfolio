import { MainNav } from './MainNav'
import { Avatar, AvatarFallback } from './ui/Avatar'
import { Button } from './ui/Button'
const Header = () => {
  return (
    <header className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="">KM</AvatarFallback>
          </Avatar>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <p>Light mode</p>
            <Button className="block">Click me!</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
