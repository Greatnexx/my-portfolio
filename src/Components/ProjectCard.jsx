import { FaLink } from 'react-icons/fa'
import fintech from '../assets/fintech.png'
import { Link } from 'react-router-dom'

const ProjectCard = ({data}) => {
  return (
    <div div className='rounded-[10px] text-[#fff] shadow-sm shadow-slate-50  w-[100%] py-3'>
        
        <img src={data.image} alt="" className='w-full object-cover overflow-hidden rounded-[10px] p-4' />
        <div className='mb-3 px-4'>
            <p className='text-[30px]'>{data.name}</p>
            <p>{data.description}</p>
        </div>
         
         
             <div className='w-full px-3 '>

                <Link to={data.link} className='bg-blue-800 w-full flex items-center justify-center rounded-[5px] py-2  '>Live<FaLink/></Link>
            
            </div>         
         
      
    </div>
  )
}

export default ProjectCard
