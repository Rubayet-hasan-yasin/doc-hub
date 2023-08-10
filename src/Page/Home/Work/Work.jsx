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
        <div className='bg-[#F2F6F6] bg-[url(/src/assets/work/doctor-shape-img1.png),_url(/src/assets/work/doctor-shape-img2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px,_200px] mb-40'>

            <div className='container mx-auto grid grid-cols-3'>
                {/* left image part */}
                <div className='border'>
                    <img src={docimg} alt="" />
                </div>

                {/* right side  */}
                <div className='border col-span-2 p-10'>
                    <h5 className='text-[#278FFC]'>How it Works</h5>

                    {/* Title from componets  */}
                    <Title text={'4 easy steps to get your solution'} />

                    {/* 4 card section  */}
                    <div className='grid grid-cols-2'>
                        {
                            data.map((item, i) => <div key={i} className='group flex'>
                                <span className="relative">

                                    <img src={item.icon} className="h-20 w-20 z-50 relative p-4" />
                                    <span className="bg-blue-100 group-hover:bg-white absolute top-0 z-0 rounded-3xl w-20 h-20 p-8 group-hover:rotate-180 duration-1000"></span>
                                </span>

                                <div>
                                    <h6>{item.title}</h6>
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