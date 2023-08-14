import svg from "../../assets/header-icon.svg" 


const Title = ({text, center}) => {
    return (
        <div className={`container mx-auto`}>
            <h1 className={`text-[40px] font-bold text-[#1F2937] flex ${center && 'justify-center'}`}>{text} <sup><img src={svg} alt="" className="h-12 w-12"/></sup></h1>
        </div>
    );
};

export default Title;