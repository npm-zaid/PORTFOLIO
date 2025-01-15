import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-900 h-[9vh] flex sm:flex-row flex-col text-gray-400 justify-between sm:text-[.7vw] text-[2.3vw] px-[2vw] py-[1vw] sm:gap-5 items-center'>
      <p>@2025</p>
      <div className='flex items-center justify-center gap-1 sm:ml-[4rem]'>
      <i className="text-[#FFDC00] text-lg animate-spin ri-crosshair-2-fill"></i>
      <p className=''>Available for a full-time position</p>
      </div>
      <p>made by zaid</p>
    </div>
  )
}

export default Footer
