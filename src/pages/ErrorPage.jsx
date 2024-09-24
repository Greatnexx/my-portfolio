import React from 'react'
import { CiWarning } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center m-auto h-screen bg-[#18191b]'>
        

          <Link to='/' className=' flex items-center text-[#FD6035]'>
            <FaArrowLeft className='ml-2'/>
          Back to Homepage</Link> 
        

          
        <div className='m-auto'>
        <h1 className='text-[50px] text-[#FFF]'>Error 404</h1>
        <CiWarning className='text-yellow-500 text-[200px]' />
      
        </div>
  
      

    </div>
  )
}

export default ErrorPage
