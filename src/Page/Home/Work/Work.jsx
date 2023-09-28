import docimg from '../../../assets/work/work-img.png'
import Title from '../../../components/Title/Title';
import svg1 from '../../../assets/work/work-01.svg'
import svg2 from '../../../assets/work/work-02.svg'
import svg3 from '../../../assets/work/work-03.svg'
import svg4 from '../../../assets/work/work-04.svg'


const data = [
    {
        icon: svg1,
        title: 'Search Doctor',
        decription: 'Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.'
    },
    {
        icon: svg2,
        title: 'Check Doctor Profile',
        decription: 'Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.'
    },
    {
        icon: svg3,
        title: 'Schedule Appointment',
        decription: 'Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.'
    },
    {
        icon: svg4,
        title: 'Get Your Solution',
        decription: 'Lorem ipsum dolor consectetur adipiscing elit, tempor incididunt labore dolore magna aliqua.'
    }
]



const Work = () => {
    return (
        <div className='bg-[#F2F6F6] bg-[url(/src/assets/work/doctor-shape-img1.png),_url(/src/assets/work/doctor-shape-img2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px,_200px] mb-20'>

            <div className='container mx-auto flex items-end h-full'>
                {/* left image part */}
                <div className='hidden lg:block'>
                    <img src={docimg} alt="" className='w-full h-full' />
                </div>

                {/* right side  */}
                <div className=' col-span-2 lg:p-14 p-5 lg:w-4/5 border'>
                    <h5 className='text-[#278FFC] font-bold text-xl'>How it Works</h5>

                    {/* Title from componets  */}
                    <Title text={'4 easy steps to get your solution'} />

                    {/* 4 card section  */}
                    <div className='grid sm:grid-cols-2 gap-10 mt-14'>
                        {
                            data.map((item, i) => <div key={i} className='group flex gap-5'>
                               

                                <div className="w-52 h-20 relative">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:rotate-180 duration-1000">
                                        <span className="bg-blue-100 rounded-3xl w-20 h-20"></span>
                                    </div>
                                    <img src={item.icon} className="h-20 w-20 relative p-4" />
                                    
                                </div>



                                <div>
                                    <h6 className='text-2xl font-bold'>{item.title}</h6>
                                    <p className='text-[#9096A0] font-semibold'>{item.decription}</p>
                                </div>

                            </div>)
                        }
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Work;