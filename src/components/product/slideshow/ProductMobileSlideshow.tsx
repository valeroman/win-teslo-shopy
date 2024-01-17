'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './sliceshow.css';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';


interface Props {
    images: string[];
    title: string;
    className?: string;

}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {


    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px'
                }}
                pagination
                autoplay={{
                    delay: 2500
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className='mySwiper2'
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image 
                                src={`/products/${image}`}
                                alt={title}
                                width={600}
                                height={500}
                                className='object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
