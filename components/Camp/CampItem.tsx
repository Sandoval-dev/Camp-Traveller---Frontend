import { PEOPLE_URL } from '@/constans';
import Image from 'next/image';
import React from 'react'
import { FaMap } from 'react-icons/fa6';

interface CampItemProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    people: string
}
const CampItem = ({ backgroundImage, people, subtitle, title }: CampItemProps) => {
    return (
        <div className={`${backgroundImage} h-full w-full min-w-[500px] lg:min-w-[800px] bg-cover bg-no-repeat rounded-3xl`}>
            <div  data-aos="fade-down" data-aos-once="true" data-aos-delay={300} className='flex h-full flex-col items-start justify-between p-6'>
                <div  className='flex items-center gap-5 justify-center'>
                    <div  className='rounded-full p-4 bg-green-100'>
                        <FaMap className='w-9 h-9 text-green-600' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white font-semibold text-xl font-roboto'>
                            {title}
                        </h4>
                        <p className='text-white text-sm font-popins'>{subtitle}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5'>
                  <span className='flex -space-x-4 overflow-hidden'>
                     {PEOPLE_URL.map((url)=> (
                        <Image alt='' src={url} key={url} width={52} height={52} />
                     ))}
                  </span>
                  <p className='text-white font-semibold font-popins'>
                    {people}
                  </p>
                </div>

            </div>

        </div>
    )
}

export default CampItem
