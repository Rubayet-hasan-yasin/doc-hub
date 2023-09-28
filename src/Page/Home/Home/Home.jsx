import Articles from "../Articles/Articles";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import Specialities from "../Specialities/Specialities";
import Work from "../Work/Work";

const Home = () => {
  return (
    <div>
      <Banner />

      <Specialities/>

      <Pricing />

      <Work />

      {/* <Articles /> */}
    </div>
  );
};

export default Home;
