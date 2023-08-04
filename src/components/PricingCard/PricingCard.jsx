
const PricingCard = ({item}) => {
    const {Icon} = item;
    return (
        <div className="h-10 w-40">
            <Icon/>
        </div>
    );
};

export default PricingCard;