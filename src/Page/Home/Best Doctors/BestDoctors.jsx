import React from 'react';
import Title from '../../../components/Title/Title';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';

// image import 
import img1 from '../../../assets/doctors/doctor-01.jpg'
import img2 from '../../../assets/doctors/doctor-02.jpg'
import img3 from '../../../assets/doctors/doctor-03.jpg'
import img4 from '../../../assets/doctors/doctor-04.jpg'
import img5 from '../../../assets/doctors/doctor-05.jpg'
import { BsStarFill } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';

// card array 
const items = [
    {
        img: img1,
        name: 'Dr. Ruby Perrin',
        department: 'Cardiology',
        location: ' Newyork, USA',
        rating: 4.5,
        reviewer: 35,
    },
    {
        img: img2,
        name: 'Dr. Darren Elder',
        department: 'Neurology',
        location: 'Florida, USA',
        rating: 4.0,
        reviewer: 20,
    },
    {
        img: img3,
        name: 'Dr. Sofia Brient',
        department: 'Urology',
        location: 'Georgia, USA',
        rating: 4.5,
        reviewer: 30,
    },
    {
        img: img4,
        name: 'Dr. Paul Richard',
        department: 'Urology',
        location: 'Michigan, USA',
        rating: 4.3,
        reviewer: 45,
    },
    // {
    //     img: img5,
    //     name: 'Dr. John Doe',
    //     department: 'Dentist',
    //     location: 'California, USA',
    //     rating: 4.3,
    //     reviewer: 50,
    // },
];

const BestDoctors = () => {

    const handlenext = () => {
        swiperRef.current.swiper.slideNext();
    }
    const handleprev = () => {
        swiperRef.current.swiper.slidePrev();
    }


    return (
        <section className='bg-[#F2F6F6] bg-[url(/src/assets/work/doctor-shape-img1.png),_url(/src/assets/work/doctor-shape-img2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px,_200px] mb-20'>

            <div className='container mx-auto'>
                {/* top title and button part */}
                <div className='flex'>
                    <Title text={'Best Doctors'} />

                    <div className="flex gap-3">
                        <LiaAngleLeftSolid onClick={handleprev} className="rounded-full shadow-md shadow-gray-300 p-2 text-5xl bg-white" />
                        <LiaAngleRightSolid onClick={handlenext} className="rounded-full shadow-md shadow-gray-300 p-2 text-5xl bg-white" />
                    </div>
                </div>


                {/* carosel part */}

                <div className='grid grid-cols-4 gap-10'>
                    {
                        items.map((item, i) => (<div key={i} className='border rounded-lg overflow-hidden'>
                            <figure>
                                <img src={item.img} alt="" />
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

                                <p className='text-base text-[#7B818E] my-3 flex items-center gap-1'><SlLocationPin color='#D7DADF' size={20}/>{item.location}</p>
                            </div>
                        </div>))
                    }
                </div>



            </div>


        </section>
    );
};

export default BestDoctors;