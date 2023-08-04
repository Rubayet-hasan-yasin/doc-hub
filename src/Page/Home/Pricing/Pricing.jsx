import Title from "../../../components/Title/Title";
import { BsFillBuildingFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import PricingCard from "../../../components/PricingCard/PricingCard";

const arr = [
    {
        "Icon": BiSolidUser,
        "category": "individuals",
        "pricing": "Basic",
        "decription": "Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor",
        "price": "99",
        "included": [
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur"
            
        ]
    },
    {
        "Icon": IoHomeSharp,
        "category": "Pro",
        "pricing": "Basic",
        "decription": "Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor",
        "price": "99",
        "included": [
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur"
            
        ]
    },
    {
        "Icon": BsFillBuildingFill,
        "category": "Pro",
        "pricing": "Basic",
        "decription": "Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor",
        "price": "99",
        "included": [
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur"
            
        ]
    }
]

const Pricing = () => {
    return (
        <div className="">
            <Title text={'Pricing Plan'} center={true}/>

            <div className="grid grid-cols-3 gap-10">
                {
                    arr.map((item, index)=> <PricingCard key={index} item={item}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;