import Image from 'next/image'
import React from 'react'
import { FaNetworkWired, FaStar } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='min-h-[550px] md:min-h-[600px] justify-center items-center flex'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/** col-span 1 */}
          <div className='flex bg-pattern flex-col justify-center pt-10 relative'>
            <Image alt='' data-aos="fade-down" data-aos-once="true" data-aos-delay={100} width={50} height={50} src="/pattern/camp.png" />
            <h1 data-aos="fade-down" data-aos-once="true" data-aos-delay={300} className='text-6xl font-bold lg:text-8xl font-popins'>Traveller Love This</h1>
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay={300} className='font-light mt-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab, consequuntur rerum! Odio quidem est veritatis voluptas nam
              rem ullam ratione illo, tempora repellat! Dolore, non?
            </p>
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay={500} className='flex items-center gap-2 mt-5 font-semibold text-xl'>

              {Array(5).fill(1).map((_, index) => (
                <FaStar key={index} className='w-8 h-8 text-yellow-400' />
              ))}
              <span>256K</span> <span className='text-green-600'>Views</span>
            </div>
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay={500} className='flex flex-row gap-3 mt-5'>
              <Button variant='mybutton'>
                <FaAngleDoubleRight className='mr-2' /> Continue
              </Button>
              <Button>
                <FaNetworkWired className='mr-2' /> Work
              </Button>
            </div>
          </div>
          <div className='lg:min-h-[650px] md:min-h-[550px] min-h-[350px] flex justify-center relative'>
             <Image src="/pattern/7.png" alt='' fill className='mx-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero