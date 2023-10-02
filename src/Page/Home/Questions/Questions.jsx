import React from 'react';
import Title from '../../../components/Title/Title';
import QuestionsAccordions from '../../../components/Accordions/QuestionsAccordions';

const Questions = () => {
    return (
        <section className='container mx-auto my-20'>
            <h6 className='text-lg text-center font-bold text-blue-500'>Get Your Answer</h6>
            <Title text={'Frequently Asked Questions'} center={true} />


            <div className='my-20'>
                {/* image section  */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
                    <div >
                        <figure className='relative'>
                            <img src="/src/assets/faq-img.png" alt="" className='w-fit h-fit object-cover mx-auto' />


                            {/* smiling emoji part */}
                            <div className='flex bg-white shadow-xl rounded p-3 gap-4 absolute left-0 right-0 -bottom-9 mx-auto w-56'>
                                <img src="/src/assets/smiling-icon.svg" alt="" />
                                <div>
                                    <p className='text-2xl'>95k+</p>
                                    <p className='text-gray-500 font-medium'>Happy Patients</p>
                                </div>
                            </div>
                        </figure>


                    </div>



                    {/* accordions part */}
                    <div className=''>
                        <QuestionsAccordions />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;