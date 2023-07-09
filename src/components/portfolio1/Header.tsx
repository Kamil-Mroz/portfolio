import { FC } from 'react'
import { Link } from 'react-scroll'

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex px-8 lg:px-0 h-14  sticky top-0 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-1">
        <h1 className="dark:text-gray-50 text-gray-950">Kamil</h1>
        <nav>
          <ul className="flex items-center space-x-4 ">
            <li
              className="link active"
              tabIndex={0}
            >
              <Link
                spy={true}
                smooth={true}
                to="home"
                offset={-56}
              >
                Home
              </Link>
            </li>
            <li
              className="link"
              tabIndex={0}
            >
              <Link
                spy={true}
                smooth={true}
                to="about"
                offset={-56}
              >
                About
              </Link>
            </li>
            <li
              className="link"
              tabIndex={0}
            >
              <Link
                spy={true}
                smooth={true}
                to="skills"
                offset={-56}
              >
                Skills
              </Link>
            </li>
            <li
              className="link"
              tabIndex={0}
            >
              <Link
                spy={true}
                smooth={true}
                to="work"
                offset={-56}
              >
                Work
              </Link>
            </li>
            <li
              className="link"
              tabIndex={0}
            >
              <Link
                spy={true}
                smooth={true}
                to="contact"
                offset={-56}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
