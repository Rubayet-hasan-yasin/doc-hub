import Title from "../../../components/Title/Title";
import { BiCalendar, BiUser } from "react-icons/bi";


// fake data for card 
const arr = [
    {
        author: 'john deo',
        image: "/src/assets/Articles/blog-11.jpg",
        date: "13 Aug, 2023",
        title: "Doccure - Making your clinic painless visit?",
        description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    },
    {
        author: 'Darren Elder',
        image: "/src/assets/Articles/blog-12.jpg",
        date: "10 Sep, 2023",
        title: "Doccure - Making your clinic painless visit?",
        description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    },
    {
        author: 'Ruby Perrin',
        image: "/src/assets/Articles/blog-13.jpg",
        date: "30 Oct, 2023",
        title: "Doccure - Making your clinic painless visit?",
        description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    },
    {
        author: 'Sofia Brient',
        image: "/src/assets/Articles/blog-14.jpg",
        date: "08 Nov, 2023",
        title: "Doccure - Making your clinic painless visit?",
        description: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    }
]

const Articles = () => {
    return (
        <div className="container mx-auto">
            {/* title from components  */}
            <Title center={true} text={'Latest Articles'} />

            {/* card parent div  */}
            <div className="my-20 grid lg:grid-cols-2 gap-8 rounded-lg">
                {
                    arr.map(item =>
                        <div
                            key={item}
                            className="border rounded-xl p-5 flex gap-5 items-center"
                        >
                            {/* image part */}
                            <div className="">
                                <figure className="w-52 h-48 rounded-lg overflow-hidden relative group">
                                    <img src={item.image} alt="" className="group-hover:scale-125 duration-1000" />

                                    {/* image overley */}
                                    <span className="h-0 w-0 rounded-full bg-slate-100 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 m-auto duration-1000 group-hover:h-[150%] group-hover:w-[150%] group-hover:-left-10 group-hover:bg-opacity-0"></span>
                                </figure>
                            </div>

                            {/* right part */}
                            <div className="pr-10">
                                {/* author name and date */}
                                <div className="flex gap-3">
                                    <p className="flex items-center text-base font-semibold gap-3 text-[#6B7280]">
                                        <BiUser size={25} />
                                        <span>{item.author}</span>
                                    </p>
                                    <p className="flex items-center text-base font-semibold gap-3 text-[#6B7280]">
                                        <BiCalendar size={25} />
                                        <span>{item.date}</span>
                                    </p>
                                </div>

                                {/* card title  */}
                                {/* TODO: onclick redirect to blog */}
                                <h5 className="text-xl font-bold my-2">{item.title}</h5>
                                {/* card description */}
                                <p className="text-base font-semibold text-[#6B7280] mb-5">{item.description}</p>

                                <button className="relative px-4 w-fit h-fit py-2 overflow-hidden font-medium text-gray-100 bg-gray-100 border-2 border-[#0F83FD] rounded-lg shadow-inner group">
                                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-[#0F83FD] group-hover:h-1/2 ease"></span>
                                    <span className="absolute top-0 bottom-0 left-0 w-0 h-full transition-all duration-700 delay-200 bg-[#0F83FD] group-hover:w-1/2 ease"></span>

                                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-[#0F83FD] group-hover:h-1/2 ease"></span>
                                    <span className="absolute bottom-0 top-0 right-0 w-0 h-full transition-all duration-700 delay-200 bg-[#0F83FD] group-hover:w-1/2 ease"></span>

                                    <span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-[#0F83FD] opacity-0 group-hover:opacity-100"></span>
                                    <span className="relative flex items-center gap-1 transition-colors duration-1000 delay-200 group-hover:text-gray-50 font-bold text-[#0F83FD] ease">
                                        View Blog
                                    </span>
                                </button>
                            </div>

                        </div>)
                }


            </div>
        </div>
    );
};

export default Articles;