import React, { useRef } from 'react';
import Title from '../../../components/Title/Title';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import "./doctors.css";

import { BsCurrencyDollar } from "react-icons/bs";

// image import 
import img1 from '../../../assets/doctors/doctor-01.jpg'
import img2 from '../../../assets/doctors/doctor-02.jpg'
import img3 from '../../../assets/doctors/doctor-03.jpg'
import img4 from '../../../assets/doctors/doctor-04.jpg'
import img5 from '../../../assets/doctors/doctor-05.jpg'
import { BsStarFill } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';



// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// card array 
const items = [
    {
        img: img1,
        name: 'Dr. Ruby Perrin',
        department: 'Cardiology',
        location: ' Newyork, USA',
        rating: 4.5,
        reviewer: 35,
        price: 200,
    },
    {
        img: img2,
        name: 'Dr. Darren Elder',
        department: 'Neurology',
        location: 'Florida, USA',
        rating: 4.0,
        reviewer: 20,
        price: 360,
    },
    {
        img: img3,
        name: 'Dr. Sofia Brient',
        department: 'Urology',
        location: 'Georgia, USA',
        rating: 4.5,
        reviewer: 30,
        price: 450,
    },
    {
        img: img4,
        name: 'Dr. Paul Richard',
        department: 'Urology',
        location: 'Michigan, USA',
        rating: 4.3,
        reviewer: 45,
        price: 550,
    },
    {
        img: img5,
        name: 'Dr. John Doe',
        department: 'Dentist',
        location: 'California, USA',
        rating: 4.3,
        reviewer: 50,
        price: 350,
    },
];


const BestDoctors = () => {
    const swiperRef = useRef();


    const handlenext = () => {
        swiperRef.current.swiper.slideNext();
    }
    const handleprev = () => {
        swiperRef.current.swiper.slidePrev();
    }


    return (
        <section className='bg-[#F2F6F6] bg-[url(/src/assets/work/doctor-shape-img1.png),_url(/src/assets/work/doctor-shape-img2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px,_200px] mb-20 py-28 select-none'>

            <div className='container mx-auto'>
                {/* top title and button part */}
                <div className='flex mb-20'>
                    <Title text={'Best Doctors'} />

                    <div className="flex gap-3">
                        <LiaAngleLeftSolid onClick={handleprev} className="rounded-full shadow-md shadow-gray-300 p-2 text-5xl bg-white" />
                        <LiaAngleRightSolid onClick={handlenext} className="rounded-full shadow-md shadow-gray-300 p-2 text-5xl bg-white" />
                    </div>
                </div>


                {/* carosel part */}

                <Swiper
                    rewind={true}
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        items.map((item, index) =>
                        (<SwiperSlide key={index}>
                            <div className='border rounded-lg overflow-hidden bg-white'>
                                <figure className='h-[172px] overflow-hidden relative hoverEffectContainer'>
                                    <img src={item.img} alt="" className='object-cover w-full' />

                                    {/* price tag  */}

                                    <div className="bg-white h-7 px-2 right-6 absolute top-4 rounded-md flex items-center justify-center">

                                        <p className='flex justify-center items-center font-medium'><BsCurrencyDollar /> {item.price}</p>

                                    </div>
                                    <div className="hoverEffectChield h-0 w-0"></div>
                                </figure>

                                <div className='p-4'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-gray-800 font-bold text-xl'>{item.name}</p>

                                        <p className='flex gap-1 text-xs items-center text-[#9CA3AF]'>
                                            <span className='flex items-center gap-1 bg-[#FFBC11] text-white rounded-xl px-2 text-base'><BsStarFill /> {item.rating}</span>
                                            ({item.reviewer})
                                        </p>
                                    </div>
                                    <p className='text-[#9CA3AF] text-sm font-semibold'>{item.department}</p>

                                    <p className='text-base text-[#7B818E] my-3 flex items-center gap-1'><SlLocationPin color='#D7DADF' size={20} />{item.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>))
                    }
                </Swiper>
                



            </div>


        </section>
    );
};

export default BestDoctors;