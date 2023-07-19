import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import banner from '../../public/banner.png'
import 'swiper/css';
import 'swiper/css/pagination';

export default function CarouselBanner (){
    return(
        <div className="overflow-x-hidden bg-gray-50">
            <section className="relative py-12 sm:py-16 ">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className='max-w-4xl mx-auto rounded-2xl overflow-hidden'>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={banner} alt="logo"/>
                        </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>

    )
}