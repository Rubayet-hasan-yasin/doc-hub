import "./Specialities.css";
import img1 from "../../../assets/specialities/specialities-01.svg";
import img2 from "../../../assets/specialities/specialities-02.svg";
import img3 from "../../../assets/specialities/specialities-03.svg";
import img4 from "../../../assets/specialities/specialities-04.svg";
import img5 from "../../../assets/specialities/specialities-05.svg";
import img6 from "../../../assets/specialities/specialities-06.svg";

const Specialities = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-6">
      {/* Card One */}
      <div className="rounded-lg border">
        <div className="my-12">
          <img src={img1} className="bg-[#F2F6F6] p-4 rounded-full mx-auto " />
          <p className="text-center text-lg font-semibold">Cardiology</p>
        </div>
      </div>
      {/* Card Two */}
      <div className="rounded-lg border">
        <div className="my-12">
          <img src={img2} className="bg-[#F2F6F6]  p-4 rounded-full mx-auto" />
          <p className="text-center text-lg  font-semibold">Cardiology</p>
        </div>
      </div>
      {/* Card Three */}
      <div className="rounded-lg border">
        <div className="my-12">
          <img src={img3} className="bg-[#F2F6F6] p-4 rounded-full mx-auto" />
          <p className="text-center text-lg font-semibold">Cardiology</p>
        </div>
      </div>
      {/* Card Four */}
      <div className="rounded-lg border">
        <div className="my-12">
          <img src={img4} className="bg-[#F2F6F6] p-4 rounded-full mx-auto" />
          <p className="text-center text-lg font-semibold">Cardiology</p>
        </div>
      </div>
      {/* Card Five */}
      <div className="rounded-lg border">
        <div className="my-12">
          <img src={img5} className="bg-[#F2F6F6] p-4 rounded-full mx-auto" />
          <p className="text-center text-lg font-semibold">Cardiology</p>
        </div>
      </div>
      {/* Card Six */}
      <div className="rounded-lg border">
        <div className="my-12">
          <img src={img6} className="bg-[#F2F6F6] p-4 rounded-full mx-auto" />
          <p className="text-center text-lg font-semibold">Cardiology</p>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
