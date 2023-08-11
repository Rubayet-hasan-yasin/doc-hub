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
                            className="border"
                        >
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <div></div>

                        </div>)
                }


            </div>
        </div>
    );
};

export default Articles;