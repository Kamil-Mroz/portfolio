import { FC } from 'react'
import { Link } from 'react-scroll'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  return (
    <section
      id="home"
      className="section  flex flex-col  space-y-5"
    >
      <div className="flex flex-col md:flex-row flex-1 md:items-center justify-between gap-5">
        <div className="self-center ">
          <p className="text-3xl font-bold">Hi,</p>
          <p className="text-3xl font-bold">
            I'am <span className="text-violet-500">Kamil</span>
          </p>
          <p className="text-3xl font-bold">Web Developer</p>
          <div
            className="bg-violet-500 text-white py-1 rounded text-center inline-block px-4 hover:bg-violet-600 mt-10"
            tabIndex={0}
          >
            <Link
              to="contact"
              offset={-56}
              smooth={true}
              className=""
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="aspect-square max-w-sm w-full h-full max-h-96 fancy-border bg-violet-500 flex-1 cover mx-auto md:mx-0">
          sdf
        </div>
      </div>
      <div className="flex space-x-4 md:justify-start justify-center">
        <a
          href=""
          target="_bank"
        >
          <GitHubLogoIcon className="icon" />
        </a>
        <a
          href=""
          target="_blank"
        >
          <LinkedInLogoIcon className="icon" />
        </a>
      </div>
    </section>
  )
}

export default Home
