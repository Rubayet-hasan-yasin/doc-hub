import downArrowImg from "../../../assets/down-arrow-img.png"
import bannerImg from "../../../assets/banner-img.png"
import image1 from "../../../assets/banner-img1.png"
import image2 from "../../../assets/banner-img2.png"
import image3 from "../../../assets/banner-img3.png"
// import image3 from "../../../assets/banner-bg.png"
import { BsSearch } from "react-icons/bs";
import { GrLocation, GrCalendar } from "react-icons/gr";


const Banner = () => {
    return (
        <div className="bg-banner-bg bg-cover">
            <div className="container mx-auto lg:grid lg:grid-cols-2 items-center">
                <div className="flex flex-col">
                    <h1 className="md:text-6xl text-4xl text-center lg:text-left font-bold text-[#272B41] leading-tight">
                        Consult <span className="text-[#0f83fd]">Best Doctors</span> Your Nearby Location.
                    </h1>
                    <p className="text-[#707885] my-5 lg:text-xl font-semibold text-center lg:text-left text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


                    <div className="flex gap-10">

                        <button className="relative mx-auto lg:mx-0 px-5 w-fit h-fit py-3 text-xl overflow-hidden font-medium text-gray-100 bg-[#0F83FD] border border-[#0F83FD] rounded-lg shadow-inner group">

                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                            <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>

                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                            <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>


                            <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-gray-700 ease"> Start a Consult</span>
                        </button>


                        <img src={downArrowImg} alt="img" className="hidden lg:block" />
                    </div>

                    <form className="md:h-16 lg:w-[140%] my-20 z-20 rounded md:flex items-center bg-slate-50 shadow-[0_0px_70px_-10px_rgba(0,0,0,0.4)] px-5 py-5 md:py-0">

                        <div className="flex items-center bg-gray-50 px-2 md:w-[30%] md:border-r py-2">
                            <BsSearch />
                            <input type="text" name="" id="" className="rounded outline-none py-1 px-2 w-full" placeholder="Search doctors, clinics, hospitals," />
                        </div>



                        <div className="flex items-center bg-gray-50 px-2 md:w-[30%] md:border-r py-2">
                            <GrLocation size={20} />
                            <input type="text" name="" id="" className="rounded outline-none py-1 px-2 w-full" placeholder="Location" />
                        </div>



                        <div className="flex items-center bg-gray-50 px-2 md:w-[30%] py-[7px]">
                            <GrCalendar size={20} />
                            <input type="date" name="" id="" className="rounded outline-none py-1 px-2 w-full" placeholder="Location" />
                        </div>

                        {/* <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Search</button> */}

                        <button className="relative mx-auto lg:mx-0 px-6 w-fit h-fit py-2 text-xl overflow-hidden font-medium text-gray-100 bg-[#0F83FD] border border-[#0F83FD] rounded-lg shadow-inner group">

                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                            <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>

                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                            <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>


                            <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-gray-700 ease">Search</span>
                        </button>

                    </form>

                </div>

                <div className="relative hidden lg:block">
                    <img src={bannerImg} alt="" className="mx-auto" />

                    <div className="lg:absolute lg:top-1/2 lg:-left-5 animate-custom-bounce-1 duration-1000 ease-in-out transition">
                        <img src={image1} alt="" />
                    </div>


                    <div className="absolute top-1/3 right-12 animate-custom-bounce-2 duration-1000 ease-in-out transition">
                        <img src={image2} alt="" />
                    </div>
                    <div className="absolute bottom-10 right-10 animate-custom-bounce-3 duration-1000 ease-in-out transition">
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;