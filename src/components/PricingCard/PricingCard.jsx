
const PricingCard = ({ item }) => {
    const { Icon, pricing, decription, price, included } = item;
    return (
        <div className=" bg-slate-200 p-8 rounded-2xl hover:bg-[#0E82FD] duration-1000 group">
            <div className="flex gap-5 items-center">
                <span className="relative">
                
                <Icon color='#0E82FD' className="h-20 w-20 z-50 relative p-4"/>
                <span className="group-hover: bg-white absolute top-0 z-0 rounded-3xl w-20 h-20 p-8 group-hover:rotate-180 duration-1000"></span>
                </span>

                <div>
                    <p className="text-xl font-semibold text-[#6B7280]">For individuals</p>
                    <p className="text-3xl font-semibold">{pricing}</p>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;