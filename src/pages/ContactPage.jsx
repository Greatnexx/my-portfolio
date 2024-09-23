import React from 'react'
import { FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div className='bg-[#18191b] h-[90vh]  flex flex-col text-[#FFF] md:justify-center items-center py-24 md:h-screen px-5'>
      <div className='px-5 text-center mt-6 md:mt-0'>
      <h1 className=' text-[40px] md:text-[80px] text-[#FD6035]'>Contact me</h1>
      
       <p className='  text-[20px] md:text-[20px]'>Let's bring your vision to life! I'm excited <br /> to collaborate with you. Feel free to reach out, and together,<br /> we'll build an amazing project today.

</p> 
      </div>
        
     
     <div className='flex justify-between items-center space-x-9 mt-20 md:mt-10 text-[35px] md:text-[45px]   hover:'>
  <Link to='https://facebook.com' target='_blank' rel='noopener noreferrer'>
    <FaFacebook className='hover:text-[#FD6035]' />
  </Link>
  <Link to='https://wa.me/2348066870296' target='_blank' rel='noopener noreferrer'>
    <FaWhatsapp className='hover:text-[#FD6035]' />
  </Link>
  <Link to='mailto:godwindanielgodwin@gmail.com'>
    <MdEmail className='hover:text-[#FD6035]' />
  </Link>
  <Link to='https://t.me/GodwinDanielz' target='_blank' rel='noopener noreferrer'> 
    <FaTelegram className='hover:text-[#FD6035]' />
  </Link>
</div>


    </div>
  )
}

export default ContactPage
