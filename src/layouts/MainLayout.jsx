import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Preloader from '../Components/PreLoader'

const MainLayout = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set timeout to 2 seconds for the loading spinner

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Navbar/>
    
    {loading ? <Preloader /> : <Outlet />}
    <Footer/>
      
    </>
  )
}

export default MainLayout
