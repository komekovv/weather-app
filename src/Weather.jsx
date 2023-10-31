import React from 'react'

export default function Weather({data}) {
  return (
    <div>
        {data ? (
          <div className=' w-48 bg-slate-200'>
            <img src={data.current.condition.icon} alt={data.current.condition.text} width={200}/>
            <p>Country: {data.city.name}</p>
            <p>Location: {data.location.name}</p>
            <p>C:{data.current.temp_c}°</p>
          </div>
        ) : (
            <p>Loading...</p>
        )}  
    </div>
  )
}
