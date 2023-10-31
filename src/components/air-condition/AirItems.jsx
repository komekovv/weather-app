import React from 'react'

export default function AirItems({icon, title, sum}) {
  return (
    <div className='h-full'>
        <div className='flex'>
            <img src={icon} alt={title} className='md:w-8 md:h-8 w-6 h-6 mr-2'/>
            <h2 className='text-gray-500 md:text-xl'>{title}</h2>
        </div>
        <h1 className='font-bold md:text-2xl text-xl text-center'>{sum}</h1>
    </div>
  )
}
