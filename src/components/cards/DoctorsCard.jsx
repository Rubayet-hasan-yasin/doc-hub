import doctor from "../../assets/doctor.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
const DoctorsCard = () => {
  return (
    <div className="w-[402px] rounded-md border overflow-hidden">
      <figure>
        <img src={doctor} alt="" />
      </figure>
      <div className="px-1 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">Dr. Ruby Perrin</p>
            <p className="text-gray-500 font-semibold text-sm">Cardiology</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 font-semibold bg-[#FFBC11] px-1 rounded-xl text-white">
              <AiOutlineStar /> <span>4.5</span>
            </div>
            <span className="text-gray-500 font-semibold text-sm">(35)</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xl text-gray-500 pb-3">
          <MdLocationOn />
          <p>New York, USA</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
