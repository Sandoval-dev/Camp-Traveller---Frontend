import { FEATURES } from '@/constans'
import Image from 'next/image'
import React from 'react'
import FeaturesItem from './FeaturesItem'

const Features = () => {
    return (
        <section className='flex flex-col bg-center mt-8 bg-no-repeat items-center overflow-hidden bg-patternTwo justify-center'>
            <div className='container relative w-full flex justify-end'>
                <div className='flex flex-1 lg:min-h-[900px]'>
                    <Image data-aos="fade-right" data-aos-once="true" data-aos-delay={300} src="/camper/phone.png" width={440} height={440} alt=''></Image>
                </div>
                <div className='flex w-full flex-col lg:w-[60%]'>
                    <div className='relative'>
                        <Image alt='' data-aos="fade-down" data-aos-once="true" data-aos-delay={100} width={50} height={50} src="/pattern/camp.png" />

                        <h1 className='text-3xl lg:text-5xl font-semibold font-pacifico'>
                            Our Features
                        </h1>
                        <ul className='mt-10 grid gap-10 md:grid-cols-2'>
                             {FEATURES.map((data)=> (
                                <FeaturesItem key={data.title} title={data.title} description={data.description}/>
                             ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features