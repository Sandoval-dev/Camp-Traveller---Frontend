import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div className='h-full w-full mt-4'>
            <div className='flex justify-center items-center'>
                <div className='container'>
                    <div className='flex flex-col justify-center'>
                        <Image alt='' data-aos="fade-down" data-aos-once="true" data-aos-delay={100} width={50} height={50} src="/pattern/camp.png" />

                        <h1 className='text-3xl lg:text-5xl font-semibold font-pacifico'>
                            Work
                        </h1>
                        <p className='mb-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eveniet ad totam quod enim minus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dignissimos!
                        </p>
                        <p className='mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati vero at inventore reiciendis, modi et atque, optio non hic quidem provident illum nulla quo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work