import downArrowImg from "../../../assets/down-arrow-img.png"
import bannerImg from "../../../assets/banner-img.png"
import image1 from "../../../assets/banner-img1.png"
import image2 from "../../../assets/banner-img2.png"
import image3 from "../../../assets/banner-img3.png"

const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 items-center">
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold text-[#272B41] leading-tight">
                    Consult <span className="text-[#0f83fd]">Best Doctors</span> Your Nearby Location.
                </h1>
                <p className="text-[#707885] my-5 text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


                <div className="flex gap-10">

                    <button className="relative px-6 w-fit h-fit py-4 text-2xl overflow-hidden font-medium text-gray-100 bg-[#0F83FD] border border-[#0F83FD] rounded-lg shadow-inner group">

                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                        <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>

                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                        <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>


                        <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-gray-700 ease"> Start a Consult</span>
                    </button>


                    <img src={downArrowImg} alt="img" />
                </div>

            </div>

            <div className="border relative">
                <img src={bannerImg} alt=""  className="mx-auto"/>

                <div className="absolute top-1/2 -left-5 animate-bounce">
                    <img src={image1} alt="" />
                </div>
                <div className="absolute top-1/3 right-12 animate-bounce">
                    <img src={image2} alt="" />
                </div>
                <div className="absolute bottom-10 right-10 animate-bounce">
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;