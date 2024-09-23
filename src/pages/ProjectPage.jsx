import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { projects } from '../utills/Projects'

const ProjectPage = () => {
  return (
    <div className='bg-[#18191b] py-12 px-[8%]'>
      <h2 className='text-[40px] text-center text-[#FFF] md:mb-32'>my <span className='text-[#FD6035]'>projects</span></h2>
      <h1 className=' text-[25px] md:text-[50px] mt-8 text-white font-bold'>Building Brands, <br /> One Success Story at a Time.</h1>

      

        <div className='container mx-auto grid md:grid-cols-2 gap-6 md:mt-14 mt-5'>
          {projects && projects.map((project,i) =>(
            <ProjectCard key={i} data={project}/>
          ))}

        </div>
    </div>
  )
}

export default ProjectPage
