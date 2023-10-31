import React from 'react'
import { drop, thermometer, uv, windy } from '../../assets'
import AirItems from './AirItems'

export default function AirConditions() {
  return (
    <div className='bg-[#f1f1f1] h-[190px] rounded-lg p-3'>
        <h1 className='font-semibold text-xs text-gray-500'>  
            AIR CONDITION
        </h1>
        <div className='flex justify-around py-3'>
            <div className='flex flex-col gap-3'>
                <AirItems icon={thermometer} title={'Real feel'} sum={'34°'}/>
                <AirItems icon={drop} title={'Chance of rain'} sum={'21%'}/>
            </div>
            <div className='flex flex-col gap-3'>
                <AirItems icon={windy} title={'Wind'} sum={'0.2km/h'}/>
                <AirItems icon={uv} title={'UV index'} sum={'3'}/>
            </div>
           
        </div>
    </div>
  )
}
