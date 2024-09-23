import React from 'react'
import img from "../assets/edit.png"
import { Link } from 'react-router-dom'
import { FaMessage} from 'react-icons/fa6'
import { skills } from '../utills/Skills'
import Skill from '../Components/Skill'





const AboutPage = () => {
  
  
  return (
    <section className='bg-[#18191b] pt-16'>
      <h1 className='text-[60px] text-center text-[#FFF]'>About Me</h1>
      <div className='container mx-auto  flex flex-col md:flex-row justify-between items-center px-8 md:px-[7%] mt-12'>
        <div className=' w-full md:w-[42%] bg-[#FD6035] rounded-[15px] '>
           <img src={img} alt="" className='mt-8  w-[85%]' />
        </div>

      
        

        <div className='md:w-1/2 text-white mt-8 md:mt-0'>
        <p className='text-justify tracking-wide'>Hi there! I'm Godwin Daniel, a passionate software developer based in Nigeria, with 2 years of hands-on experience. Passionate about crafting efficient and innovative solutions in software development.</p>
        
        <p className='mt-6 text-justify tracking-wide '>In my career journey I have had the opportunity to collaborate with cross-functional teams, including designers, backend developers, and project managers, to deliver high-quality products on time and within budget. I am a strong communicator and collaborator, and enjoy working in fast-paced and dynamic environments</p>
        
        <div className=' w-52 md:w-52  md:mt-8 '>

        <Link  to='/contact'  className='    flex items-center bg-[#212429]  rounded-2xl  mt-3 p-1 rounded-   [30px] text-center px-3 md:px-5 '>lets Connect
          <span className='bg-[#FD6035]  p-5 rounded-full ml-2 md:ml-3'>
          <FaMessage  className='text-center   text-[#FFF]  '/>
          </span>
      </Link>  
       </div>
      

        </div>

      </div>
      
      <div className='py-10 px-[9%]'>

        <h1 className='text-[50px] text-[#FFF] text-center mb-5'>my skills</h1>

        <div className='container mx-auto grid  md:grid-cols-4 gap-6'>
          {skills.map((skill,index) => (
            <Skill key={index} data={skill}/>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default AboutPage
