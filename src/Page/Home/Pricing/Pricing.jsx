import Title from "../../../components/Title/Title";
import { BsFillBuildingFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import PricingCard from "../../../components/PricingCard/PricingCard";

const arr = [
    {
        "Icon": BiSolidUser,
        "category": "For individuals",
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
        "category": "For startups",
        "pricing": "Pro",
        "decription": "Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor",
        "price": "299",
        "included": [
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            "Lorem ipsum dolor amet, consectetur",
            
        ]
    },
    {
        "Icon": BsFillBuildingFill,
        
        "pricing": "Enterprise",
        "category": "For big companies",
        "decription": "Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor",
        "price": "399",
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
        <div className="container mx-auto my-20">
            <Title text={'Pricing Plan'} center={true}/>

            <div className="grid md:grid-cols-3 gap-7 mx-auto items-center mt-24">
                {
                    arr.map((item, index)=> <PricingCard key={index} item={item} number={index}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;