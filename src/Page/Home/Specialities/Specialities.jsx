import "./Specialities.css";
import React, { useRef } from "react";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

// images 
import img1 from "../../../assets/specialities/specialities-01.svg";
import img2 from "../../../assets/specialities/specialities-02.svg";
import img3 from "../../../assets/specialities/specialities-03.svg";
import img4 from "../../../assets/specialities/specialities-04.svg";
import img5 from "../../../assets/specialities/specialities-05.svg";
import img6 from "../../../assets/specialities/specialities-06.svg";
import Title from "../../../components/Title/Title";


// swiper

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



// items array 
const items = [
  {
    icon: img1,
    text: 'Cardiology'
  },
  {
    icon: img2,
    text: 'Neurology'
  },
  {
    icon: img3,
    text: 'Urology'
  },
  {
    icon: img4,
    text: 'Orthopedic'
  },
  {
    icon: img5,
    text: 'Dentist'
  },
  {
    icon: img6,
    text: 'Ophthalmology'
  },
  {
    icon: img1,
    text: 'Cardiology'
  },
  {
    icon: img2,
    text: 'Neurology'
  },
  {
    icon: img3,
    text: 'Urology'
  },
  {
    icon: img4,
    text: 'Orthopedic'
  },
  {
    icon: img5,
    text: 'Dentist'
  },
  {
    icon: img6,
    text: 'Ophthalmology'
  },
]


const Specialities = () => {
  const swiperRef = useRef();

const handlenext = ()=>{
  swiperRef.current.swiper.slideNext();
}
const handleprev = ()=>{
  swiperRef.current.swiper.slidePrev();
}



  return (
    <>

      <section className="container mx-auto select-none">
        {/* title  */}
        <div className="my-20 flex justify-between">
          <Title text={'Specialities'} />

          <div className="flex gap-3">
            <LiaAngleLeftSolid onClick={handleprev} className=" bg-white rounded-full shadow-md shadow-gray-300 p-2 text-5xl"/>
            <LiaAngleRightSolid onClick={handlenext} className="bg-white rounded-full shadow-md shadow-gray-300 p-2 text-5xl"/>
          </div>
        </div>
        <Swiper
          rewind={true}
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={3}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 4,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            items.map((item, index)=>
              (<SwiperSlide key={index}>
              < div className="rounded-lg w-40 border mx-auto" >
                <div className="my-12">
                  <figure className="bg-[#F2F6F6] p-4 rounded-full mx-auto w-[90px] h-[90px] grid justify-center items-center">
                    <img src={item.icon} alt="" />
                  </figure>
                  <p className="text-center text-lg font-semibold">Cardiology</p>
                </div>
              </div >
            </SwiperSlide>))
          }
        </Swiper>




        <div className="flex justify-center mt-16" >
        <button className="relative px-3 w-fit h-fit py-2 overflow-hidden font-medium text-gray-100 bg-[#0E82FD] border-[#0E82FD] border rounded shadow-inner group">

              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-white group-hover:h-1/2 ease"></span>
              <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-white group-hover:w-1/2 ease"></span>

              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-white group-hover:h-1/2 ease"></span>
              <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-white group-hover:w-1/2 ease"></span>

              <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
              <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-[#0E82FD] ease">
                 See All Specialities
              </span>
            </button>
        
        </div >
      </section>
    </>
  );
};

export default Specialities;
