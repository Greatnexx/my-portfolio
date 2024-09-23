import { Link, NavLink } from "react-router-dom"
import { MdEmail, MdMessage } from "react-icons/md";
import { useState } from "react";
import { FaFacebook, FaHamburger, FaInstagram, FaLinkedin, FaTelegram, FaTimes, FaWhatsapp } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    const activeStyles = ({isActive} ) => isActive ? "text-[#FD6035] " : ""
  return (
    <header className="bg-[#212429]">

        {/* desktop navbar */}
        <nav className=" hidden md:flex justify-between items-center px-[9%] py-3">
            <Link to ='/' >
              <h1 className='text-[48px] text-[#FFF]'>Danielz<span className="text-[#FD6035]">.</span></h1> 
            </Link>
            <ul className="text-[20px] text-[#FFF] flex items-center space-x-5 ">
                <li> <NavLink className={activeStyles} to='/'>Home</NavLink></li>
                <li> <NavLink className={activeStyles} to='/about'>About</NavLink></li>
                <li> <NavLink className={activeStyles} to='/project' >Projects</NavLink> </li>
                <li>  <NavLink className={activeStyles} to="/contact">Contact</NavLink></li>
            </ul>

                <Link to='/contact' className="text-[20px] flex items-center gap-2  text-[#FFF]">
                  let' talk
                  <div className="bg-[#FD6035] p-3 rounded-full ">
                  <MdMessage/>
                  </div>
                </Link>
        </nav>


      {/* mobile navbar */}
      <nav className="md:hidden px-4 py-2">
      <Link to ='/' >
              <h1 className='text-[35px] text-[#FFF] px-4'>Danielz<span className="text-[#FD6035]">.</span></h1> 
            </Link>
            <div>
      {/* Button to open the menu */}
      <button
        className="fixed top-3 right-5 bg-[#FD6035] text-white px-2 py-2 rounded-md"
        onClick={toggleMenu}
      >
        <CiMenuFries className="text-[#FFF] size-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Off-canvas navigation */}
      <div
        className={`fixed top-0 right-0 z-20 h-full w-64 bg-[#212429] text-[#FFF] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleMenu}
        >
          <FaTimes className="text-[#FD6035] text-[35px]"/>
        </button>
        <nav className="flex flex-col items-center mt-16 space-y-6">
          <Link to="/" onClick={toggleMenu} className="text-lg ">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}  className="text-lg ">
            About
          </Link>
          <Link to="/project" onClick={toggleMenu}  className="text-lg ">
            Projects
          </Link>
          <Link to="/contact" onClick={toggleMenu}  className="text-lg ">
            Contact
          </Link>


          <div className='flex justify-between   items-center space-x-9 mt-20 md:mt-0 text-[25px] md:text-[45px]  hover:'>
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

      
        </nav>
        <div className="mt-96 text-center text-base ml-5">

        <p className="text-[20px]">call : 08066670296</p> 
        </div>
      </div>
    </div>
            


      </nav>

      
    </header>
  )
}

export default Navbar
