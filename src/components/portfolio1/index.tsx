import { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'

export interface Portfolio1Props {}

const Portfolio1: FC<Portfolio1Props> = (props) => {
  return (
    <div className="dark:bg-gray-950 dark:text-gray-50 text-gray-950 bg-white">
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio1
