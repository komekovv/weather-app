import React from 'react'
import { search } from '../assets'

export default function SearchBar() {
  return (
    <form className='w-full py-7'>
        <div className='flex items-center h-[50px] rounded-lg bg-[#F1F1F1] px-4'>
            <input type="search" placeholder='Search...' className='w-full h-full bg-[#F1F1F1] rounded-lg bg-none outline-none'/>
            <div className='flex justify-center items-center w-6 h-6 '>
              <img src={search} alt="search" className=' w-full' />
            </div>
        </div>
    </form>
  )
}
