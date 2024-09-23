import React, { useEffect, useState } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import img from "../assets/edit.png"
import cvFile from '../assets/my cv.pdf'
import { Link } from 'react-router-dom'

const Hero = () => {
    const phrases= [
        'Software Developer',
        'Graphic Designer'
    ]



  const [phraseIndex,setPhraseIndex] = useState(0)

  useEffect(() =>{

    const interval = setInterval(() =>{
        setPhraseIndex((prevIndex) =>(prevIndex + 1) % phrases.length)

    },3000)
    return () => clearInterval(interval)
  },[])
  return (
    <section className='bg-[#18191b]  py-4 '>
        <div className='container mx-auto flex  w-full flex-col-reverse  py-4 md:py-0    md:flex-row items-center md:space-x-40 px-[5%]  '>

            <div className='flex flex-col md:w-1/2  text-start text-[#FFF] mt-8  px-4 py-2 md:py-0 '>

            <h1 className=' text-[30px] text-[#FD6035] mb-2 md:mb-5 '>Hello I'm</h1>
            <h2 className=' text-3xl md:text-5xl font-bold mb-2 md:mb-5'>Godwin </h2>
            <h3 className=' text-2xl md:text-5xl font-bold'>Danielz </h3>
            <p className=' text-[30px] md:text-[40px]'>i'm a <span className='text-[#FD6035] text-[23px] md:text-[36px]'>{phrases[phraseIndex]}</span>  </p>

            <p className='text-justify'>"I'm  a passionate frontend developer creating seamless, responsive web experiences. I love turning ideas into interactive, user-friendly designs. Feel free to explore my projects, where creativity meets clean code. Let’s build something amazing together!"</p>
            
            </div> 
              <div className=' bg-[#FD6035] rounded-full p-40  md:p-64 mt-7  relative '>
                <img src={img} alt="" className='w-full absolute top-10 bottom-11 right-5' />
              </div>


          </div>

                 <div className=' w-52  ml-[8%] text-center  '>

          <Link to={cvFile} download={cvFile} target='blank' className='    bg-[#FD6035] flex items-center   p-1 rounded-[30px] text-center px-3 md:px-5 '>Download Cv
                    <span className='bg-black p-5 rounded-full ml-2 md:ml-3'>
                    <FaFileDownload  className='text-center text-[#FFF]   '/>
                    </span>
                </Link>  
                 </div>
    </section>
  )
}

export default Hero
