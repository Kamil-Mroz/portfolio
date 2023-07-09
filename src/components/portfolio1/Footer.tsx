import { FC } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
export interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className="space-y-3 text-sm text-center p-1">
      <h2 className="text-xl">Kamil</h2>
      <div className="flex space-x-4 justify-center ">
        <a
          href=""
          target="_bank"
        >
          <GitHubLogoIcon className="icon w-5 h-5" />
        </a>
        <a
          href=""
          target="_blank"
        >
          <LinkedInLogoIcon className="icon w-5 h-5" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} copyright all rights reserved</p>
    </footer>
  )
}

export default Footer
