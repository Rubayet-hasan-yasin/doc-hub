import Articles from "../Articles/Articles";
import Banner from "../Banner/Banner";
import BestDoctors from "../Best Doctors/BestDoctors";
import Pricing from "../Pricing/Pricing";
import Questions from "../Questions/Questions";
import Specialities from "../Specialities/Specialities";
import Work from "../Work/Work";

const Home = () => {
  return (
    <div>
      <Banner />

      <Specialities/>

      <BestDoctors/>

      <Pricing />

      <Work />

      <Articles />

      <Questions/>
    </div>
  );
};

export default Home;
