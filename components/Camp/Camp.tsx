import React from 'react'
import CampItem from './CampItem'
import { ImQuotesLeft } from 'react-icons/im'

const Camp = () => {
    return (
        <section className='container relative flex flex-col py-10'>
            <div className='flex h-[340px] hide-scrollbar overflow-x-auto lg:h-[440px] xl:h-[540px] w-full items-start justify-start gap-8'>
                <CampItem title='Bursa in Turkiye'
                    backgroundImage='bg-bgimage' people='25 Joined'
                    subtitle='Nilufer is loading' />
                <CampItem title='Bursa in Turkiye'
                    backgroundImage='bg-bgimageTwo' people='25 Joined'
                    subtitle='Nilufer is loading' />
            </div>

            <div data-aos="fade-down" data-aos-delay={400}  className='flex items-center lg:-mt-24 justify-end mt-10 px-6'>
               <div className='bg-green-600 p-8 lg:max-w-[550px] xl:max-w-[720px] rounded-3xl relative w-full overflow-hidden'>
                   <h2 className='text-5xl text-white'>
                    <span className='font-semibold font-popins'>Lost Feel</span> and not Know
                   </h2>
                   <p className='mt-5 text-white'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, at vero eum sequi ipsam dolores.
                   </p>
                   <ImQuotesLeft className='h-16 w-16 ml-auto text-white'/>
               </div> 
            </div>


        </section>
    )
}

export default Camp
