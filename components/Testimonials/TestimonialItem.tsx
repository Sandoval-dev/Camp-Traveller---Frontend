import Image from 'next/image';
import React from 'react'

interface TestimonialItemProps{
    img:string;
    name:string;
    description:string;
    aosDelay:string;
}

const TestimonialItem = ({aosDelay,description,img,name}:TestimonialItemProps) => {
  return (
    <div className='rounded-2xl bg-green-600 group relative mb-8 shadow-xl w-full:' data-aos="fade-down"  data-aos-delay={aosDelay}>
      <div className='h-52'>
         <Image alt='' src={img}
          width={200} height={200} 
          className='mx-auto rounded-full transform p-6 group-hover:scale-105'/>
      </div>
      <div className='p-4 text-center'>
          <div className='w-full'>
             <h1 className='text-xl text-white font-popins font-bold'>{name}</h1>
             <p className='font-light text-white'>{description}</p>
          </div>
      </div>
    </div>
  )
}

export default TestimonialItem
