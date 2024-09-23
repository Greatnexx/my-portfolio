import React from 'react'

const Skill = ({data}) => {
  return (
    <div className=''>
       <div className='shadow-sm shadow-slate-50 p-4'>
        <img src={data.image} alt="" className='w-[60%] h-auto object-fill m-auto' /> 
        <p className='text-[#FFF] text-center mt-5'>{data.name}</p>
            </div>
    </div>
  )
}

export default Skill
