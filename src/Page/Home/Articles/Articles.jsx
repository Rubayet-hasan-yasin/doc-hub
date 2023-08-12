import Title from "../../../components/Title/Title";
import { BiUser } from "react-icons/bi";


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
            <div className="my-20 grid grid-cols-2 gap-8 rounded-lg">
                {
                    arr.map(item =>
                        <div
                            key={item}
                            className="border rounded-xl p-7 flex gap-3"
                        >
                            {/* image part */}
                            <div className="border">
                                <figure className="w-52 h-52 rounded-lg overflow-hidden relative group">
                                    <img src={item.image} alt="" className="group-hover:scale-125 duration-1000"/>
                                    
                                    {/* image overley */}
                                    <span className="h-0 w-0 rounded-full bg-slate-100 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 m-auto duration-1000 group-hover:h-[150%] group-hover:w-[150%] group-hover:-left-10 group-hover:bg-opacity-0"></span>
                                </figure>
                            </div>
                            <div className="border w-full">

                            </div>

                        </div>)
                }


            </div>
        </div>
    );
};

export default Articles;