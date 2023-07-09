import { FC } from 'react'

export interface AboutProps {}

const About: FC<AboutProps> = (props) => {
  return (
    <div
      id="about"
      className="section flex flex-col"
    >
      <h2 className="section-title">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2   md:items-center place-items-center gap-8 flex-1">
        <div className="w-52 h-96 bg-violet-500 rounded-lg"></div>
        <div className="">
          <h3 className="text-2xl font-medium">Professional Skills</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eos est dolores nisi nam commodi dignissimos at, expedita rerum
            temporibus repudiandae, ipsa voluptatem, pariatur porro voluptatibus
            asperiores eveniet ad perferendis?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
