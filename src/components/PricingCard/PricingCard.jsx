import { FaCheckCircle } from "react-icons/fa";



const PricingCard = ({ item, number }) => {
    const { Icon, pricing, decription, price, included } = item;
    return (
        <div className={`bg-slate-200 p-8 rounded-2xl ${number !== 1 && 'group'} hover:bg-[#0E82FD] duration-100 h-fit even:bg-[#0E82FD]`}>
            <div className="flex gap-5 items-center">
                <span className="relative">

                    <Icon color='#0E82FD' className="h-20 w-20 z-50 relative p-4" />
                    <span className="group-hover: bg-white absolute top-0 z-0 rounded-3xl w-20 h-20 p-8 group-hover:rotate-180 duration-1000"></span>
                </span>

                <div>
                    <p className={`text-xl font-semibold group-hover:text-white ${number === 1 ? "text-white" : "text-[#6B7280]"} duration-1000`}>For individuals</p>
                    <p className={`text-3xl font-semibold group-hover:text-white ${number === 1 ? "text-white" : "text-[#6B7280]"} duration-1000`}>{pricing}</p>
                </div>
            </div>

            <p className={`text-[#6B7280] group-hover:text-white duration-1000 my-3 ${number === 1 ? "text-white" : "text-[#6B7280]"}`}>{decription}</p>

            <p className={`group-hover:text-white font-bold text-4xl duration-1000 ${number === 1 ? "text-white" : "text-[#6B7280]"}`}>${price} <span className={`text-xl  group-hover:text-white font-normal duration-1000`}>/monthly</span></p>

            <p className={`text-2xl tracking-wider group-hover:text-white duration-1000 my-2 font-semibold mb-5 ${number === 1 ? "text-white" : "text-[#6B7280]"}`}>What&apos;s included</p>

            {
                included.map((item,i)=> <p key={i} className={`my-2 text-[#6B7280] flex items-center gap-2 text-lg group-hover:text-white ${number === 1 ? "text-white" : "text-[#6B7280]"}`}><FaCheckCircle className={` group-hover:text-white ${number === 1 ? "text-white" : "text-[#3a0eff]"}`}/> {item}</p>)
            }
        </div>
    );
};

export default PricingCard;