import Articles from "../Articles/Articles";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import Work from "../Work/Work";

const Home = () => {
  return (
    <div>
      <Banner />

      <Pricing />

      <Work />

      <Articles />
    </div>
  );
};

export default Home;
