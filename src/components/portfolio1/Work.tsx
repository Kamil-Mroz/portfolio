import { FC } from 'react'

export interface WorkProps {}

const Work: FC<WorkProps> = (props) => {
  return (
    <div
      id="work"
      className="section flex flex-col"
    >
      <h2 className="section-title">Work</h2>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-violet-500 rounded-lg grid">
          <div className="h-48"></div>
        </div>
        <div className="bg-violet-500 rounded-lg ">
          <div className="h-48"></div>
        </div>
        <div className="bg-violet-500 rounded-lg ">
          <div className="h-48"></div>
        </div>
        <div className="bg-violet-500 rounded-lg ">
          <div className="h-48"></div>
        </div>
        <div className="bg-violet-500 rounded-lg ">
          <div className="h-48"></div>
        </div>
        <div className="bg-violet-500 rounded-lg ">
          <div className="h-48"></div>
        </div>
      </div>
    </div>
  )
}

export default Work
