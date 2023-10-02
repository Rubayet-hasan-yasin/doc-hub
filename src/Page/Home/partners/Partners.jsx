import React from 'react';

import img1 from '../../../assets/partners/partners-1.svg';
import img2 from '../../../assets/partners/partners-2.svg';
import img3 from '../../../assets/partners/partners-3.svg';
import img4 from '../../../assets/partners/partners-4.svg';
import img5 from '../../../assets/partners/partners-5.svg';
import img6 from '../../../assets/partners/partners-6.svg';
import Title from '../../../components/Title/Title';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';



const Partners = () => {
    return (
        <div className='my-40'>
            <Title text={"Our Partners"} center={true} />



            <Swiper
                slidesPerView={1}
                spaceBetween={3}
                
                speed={2500}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 60,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                  }}
                className="mySwiper my-20 w-11/12"
            >
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img6} alt="" />
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-20 flex items-center justify-center border rounded'>
                        <img src={img6} alt="" />
                    </div>
                </SwiperSlide>
                
              
            </Swiper>
        </div>
    );
};

export default Partners;