
const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-2">
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold text-[#272B41] leading-tight">
                    Consult <span className="text-[#0f83fd]">Best Doctors</span> Your Nearby Location.
                </h1>
                <p className="text-[#707885] my-5 text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


                <button className="relative px-3 w-fit h-fit py-2 overflow-hidden font-medium text-gray-100 bg-[#0F83FD] border border-[#0F83FD] rounded-lg shadow-inner group">



                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                    <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>

                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-1/2 ease"></span>
                    <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-gray-100 group-hover:w-1/2 ease"></span>


                    <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative flex items-center gap-1 transition-colors duration-700 delay-200 group-hover:text-gray-700 ease"> Start a Consult</span>
                </button>

            </div>
        </div>
    );
};

export default Banner;