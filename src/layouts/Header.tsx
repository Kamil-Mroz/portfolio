import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../components/ui/Navigation-menu'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const title = useLocation().pathname.split('/')[1]
  console.log(title)
  return (
    <div className="flex justify-between">
      <h2 className="self-end text-3xl font-bold before:h-1 before:bg-secondary-foreground before:w-9 relative before:absolute before:rounded-full before:-bottom-3 before:left-0">
        {title ? title.slice(0, 1).toUpperCase() + title.slice(1) : 'About Me'}
      </h2>
      <div>
        <NavigationMenu className="bg-border rounded-bl-3xl overflow-hidden px-4">
          <NavigationMenuList className="space-x-0">
            <NavigationMenuItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-secondary-foreground' : ''
                  } p-2 xl:p-5 block`
                }
              >
                <NavigationMenuLink>About</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="resume"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-secondary-foreground' : ''
                  } p-2 xl:p-5 block`
                }
              >
                <NavigationMenuLink>Resume</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="portfolio"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-secondary-foreground' : ''
                  } p-2 xl:p-5 block`
                }
              >
                <NavigationMenuLink>Portfolio</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-secondary-foreground' : ''
                  } p-2 xl:p-5 block`
                }
              >
                <NavigationMenuLink>Blog</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-secondary-foreground' : ''
                  } p-2 xl:p-5 block`
                }
              >
                <NavigationMenuLink>Contact</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
export default Header
