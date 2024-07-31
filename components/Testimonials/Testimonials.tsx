import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { TESTIMONIALDATA } from '@/constans';
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
    return (
        <section className='py-10'>
            <div className='container'>
                <div className='text-center mb-10'>
                    <h1 className='text-3xl lg:text-5xl font-semibold font-pacifico'>Testimonials</h1>
                    <div className='flex justify-center'>
                        <div className='mb-6 mt-5 h-1 w-full max-w-xl bg-green-600'>

                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {TESTIMONIALDATA.map((testimon) => (

                        <SwiperSlide key={testimon.id}>

                            <TestimonialItem
                                name={testimon.name}
                                aosDelay={testimon.aosDelay}
                                description={testimon.description}
                                img={testimon.img}
                            />


                        </SwiperSlide>

                    ))}





                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials