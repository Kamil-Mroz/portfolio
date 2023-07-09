import { FC } from 'react'

export interface SkillsProps {}

const Skills: FC<SkillsProps> = (props) => {
  return (
    <div
      id="skills"
      className="section flex flex-col"
    >
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2   md:items-center place-items-center gap-8 flex-1">
        <div className="">
          <h3 className="text-2xl font-medium">I'm Kamil</h3>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eos est dolores nisi nam commodi dignissimos at, expedita rerum
            temporibus repudiandae, ipsa voluptatem, pariatur porro voluptatibus
            asperiores eveniet ad perferendis?
          </p>
          <div className="space-y-3">
            <div className="progress before:w-[95%]">
              <h4>HTML 5</h4>
              <p>95%</p>
            </div>
            <div className="progress before:w-[90%]">
              <h4>CCS 3</h4>
              <p>90%</p>
            </div>
            <div className="progress before:w-[85%]">
              <h4>JavaScript</h4>
              <p>80%</p>
            </div>
          </div>
        </div>

        <div className="w-96 h-52 bg-violet-500 rounded-lg"></div>
      </div>
    </div>
  )
}

export default Skills
